import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Plus, Pencil, Trash2, X, Upload, Image, Search, ExternalLink, RefreshCw } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { adminApi, imageUrl, SITE_BASE } from '../lib/api'
import { contentTypes, blankFields, validateContent } from '../../../shared/content-schema.js'

function ImageField({ field, value, onChange, onBusy }) {
  const [files, setFiles] = useState(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [libraryOpen, setLibraryOpen] = useState(false)
  async function upload(event) {
    const file = event.target.files?.[0]
    if (!file) return
    setError(''); setBusy(true); onBusy(1)
    try {
      const form = new FormData()
      form.append('file', file)
      const data = await adminApi('/media/upload', { method: 'POST', body: form })
      onChange(data.file.url)
    } catch (err) { setError(err.message) }
    finally { setBusy(false); onBusy(-1); event.target.value = '' }
  }
  async function browse() {
    setLibraryOpen(!libraryOpen)
    if (libraryOpen) return
    setError(''); setFiles(null)
    try { const data = await adminApi('/media'); setFiles(data.files.filter(file => file.type.startsWith('image/'))) }
    catch (err) { setError(err.message); setFiles([]) }
  }
  return <div className="space-y-2">
    <label className="block space-y-2 text-sm font-medium"><span>{field.label}{field.required && ' *'}</span><input aria-label={field.label} className="form-input" value={value || ''} onChange={event => onChange(event.target.value)} required={field.required} placeholder="https://… or /assets/…" /></label>
    <div className="flex flex-wrap items-center gap-2">
      <label className="relative inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-xs focus-within:ring-2 focus-within:ring-ring"><Upload className="size-3" />{busy ? 'Uploading…' : 'Upload image'}<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" aria-label={`Upload ${field.label}`} onChange={upload} disabled={busy} className="absolute inset-0 w-full cursor-pointer opacity-0" /></label>
      <Button type="button" variant="outline" size="sm" onClick={browse}><Image />Choose from media</Button>
      {value && <img src={imageUrl(value)} alt={`${field.label} preview`} className="size-12 rounded border object-cover" />}
    </div>
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    {libraryOpen && <div className="max-h-48 overflow-auto rounded-md border p-3"><p className="mb-2 text-xs text-muted-foreground">{files === null ? 'Loading images…' : files.length ? 'Select an image' : 'No uploaded images yet.'}</p><div className="grid grid-cols-3 gap-2 sm:grid-cols-5">{files?.map(file => <button type="button" key={file.id} className="rounded border p-1 text-left hover:bg-accent" onClick={() => { onChange(file.url); setLibraryOpen(false) }}><img src={imageUrl(file.url)} alt="" className="h-16 w-full object-cover" /><span className="block truncate text-xs">{file.name}</span></button>)}</div></div>}
  </div>
}

function Fields({ fields, value, onChange, onBusy }) {
  const change = (key, next) => onChange({ ...value, [key]: next })
  return <div className="grid gap-5 sm:grid-cols-2">{fields.map(field => {
    const current = value[field.key]
    if (field.type === 'group') return <fieldset key={field.key} className="rounded-lg border p-4 sm:col-span-2"><legend className="px-2 text-sm font-semibold">{field.label}</legend><Fields fields={field.fields} value={current || {}} onChange={next => change(field.key, next)} onBusy={onBusy} /></fieldset>
    if (field.type === 'rows') return <fieldset key={field.key} className="space-y-3 rounded-lg border p-4 sm:col-span-2"><legend className="px-2 text-sm font-semibold">{field.label}</legend>{(current || []).map((row, index) => <div key={index} className="space-y-3 rounded-md border bg-muted/20 p-3"><Fields fields={field.fields} value={row} onBusy={onBusy} onChange={next => change(field.key, current.map((item, i) => i === index ? next : item))} /><Button type="button" size="sm" variant="ghost" onClick={() => change(field.key, current.filter((_, i) => i !== index))}><Trash2 />Remove entry {index + 1}</Button></div>)}<Button type="button" variant="outline" size="sm" onClick={() => change(field.key, [...(current || []), blankFields(field.fields)])}><Plus />Add entry</Button></fieldset>
    if (field.type === 'image') return <ImageField key={field.key} field={field} value={current} onChange={next => change(field.key, next)} onBusy={onBusy} />
    if (field.type === 'images') return <fieldset key={field.key} className="space-y-3 rounded-lg border p-4 sm:col-span-2"><legend className="px-2 text-sm font-semibold">{field.label}</legend>{(current || []).map((url, index) => <div key={index} className="space-y-2"><ImageField field={{ label: `Gallery image ${index + 1}` }} value={url} onBusy={onBusy} onChange={next => change(field.key, current.map((item, i) => i === index ? next : item))} /><Button type="button" variant="ghost" size="sm" onClick={() => change(field.key, current.filter((_, i) => i !== index))}>Remove image {index + 1}</Button></div>)}<Button type="button" variant="outline" size="sm" onClick={() => change(field.key, [...(current || []), ''])}><Plus />Add image</Button></fieldset>
    const multiline = ['textarea', 'lines'].includes(field.type)
    const Tag = multiline ? 'textarea' : 'input'
    return <label key={field.key} className={`block space-y-2 text-sm font-medium ${multiline ? 'sm:col-span-2' : ''}`}><span>{field.label}{field.required && ' *'}</span><Tag aria-label={field.label} className="form-input" required={field.required} value={field.type === 'lines' ? (current || []).join('\n') : current || ''} onChange={event => change(field.key, field.type === 'lines' ? event.target.value.split('\n') : event.target.value)} rows={multiline ? (field.key === 'body' ? 14 : 4) : undefined} maxLength={multiline ? 60000 : 2000} />{field.type === 'lines' && <span className="block text-xs font-normal text-muted-foreground">One item per line.</span>}{field.type === 'slug' && <span className="block text-xs font-normal text-muted-foreground">Lowercase words separated by hyphens. Changing this changes the public URL.</span>}{field.key === 'body' && <span className="block text-xs font-normal text-muted-foreground">Separate paragraphs with a blank line. Text is displayed without HTML.</span>}</label>
  })}</div>
}

function Editor({ kind, item, onClose, onSaved }) {
  const config = contentTypes[kind]
  const [draft, setDraft] = useState(item)
  const [saving, setSaving] = useState(false)
  const [uploads, setUploads] = useState(0)
  const [error, setError] = useState('')
  const busy = saving || uploads > 0
  const dirty = JSON.stringify(draft) !== JSON.stringify(item)
  function close() { if (!busy && (!dirty || window.confirm('Discard your unsaved changes?'))) onClose() }
  function change(next) {
    if (!draft.id && (!draft.slug || draft.slug === slugify(draft[config.titleKey]))) next.slug = slugify(next[config.titleKey])
    setDraft(next)
  }
  async function submit(event) {
    event.preventDefault(); setError('')
    try {
      const data = validateContent(kind, draft)
      setSaving(true)
      const result = await adminApi(`/content/${kind}${draft.id ? `/${draft.id}` : ''}`, { method: draft.id ? 'PUT' : 'POST', body: JSON.stringify({ ...data, status: draft.status, sortOrder: Number(draft.sortOrder), version: draft.version }) })
      onSaved(result.item)
    } catch (err) { setError(err.message) }
    finally { setSaving(false) }
  }
  return <Dialog.Root open onOpenChange={open => { if (!open) close() }}><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" /><Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[94svh] w-[calc(100%-1rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border bg-background shadow-xl" onInteractOutside={event => event.preventDefault()}>
    <div className="border-b p-5 pr-12"><Dialog.Title className="text-lg font-semibold">{item.id ? 'Edit' : 'Add'} {config.singular}</Dialog.Title><Dialog.Description className="mt-1 text-sm text-muted-foreground">Published content appears on the website. Drafts are visible only in admin.</Dialog.Description><button onClick={close} disabled={busy} aria-label="Close editor" className="absolute right-4 top-5"><X className="size-5" /></button></div>
    <form onSubmit={submit} className="min-h-0 overflow-auto p-5">
      <fieldset disabled={busy} className="space-y-6">
        <div className="grid gap-4 rounded-lg bg-muted/40 p-4 sm:grid-cols-2"><label className="space-y-2 text-sm font-medium"><span className="block">Status</span><select className="form-input" value={draft.status} onChange={event => setDraft({ ...draft, status: event.target.value })}><option value="draft">Draft</option><option value="published">Published</option></select></label><label className="space-y-2 text-sm font-medium"><span className="block">Display order</span><input className="form-input" type="number" min="0" max="100000" step="1" required value={draft.sortOrder} onChange={event => setDraft({ ...draft, sortOrder: event.target.value })} /><span className="text-xs font-normal text-muted-foreground">Lower numbers appear first.</span></label></div>
        <Fields fields={config.fields} value={draft} onChange={change} onBusy={delta => setUploads(count => count + delta)} />
      </fieldset>
      {error && <p role="alert" className="my-4 rounded-md border border-destructive/40 p-3 text-sm text-destructive">{error}</p>}
      <div className="sticky bottom-0 mt-6 flex justify-end gap-2 border-t bg-background py-4"><Button type="button" variant="outline" onClick={close} disabled={busy}>Cancel</Button><Button type="submit" disabled={busy}>{uploads ? 'Uploading…' : saving ? 'Saving…' : draft.status === 'published' ? 'Save and publish' : 'Save draft'}</Button></div>
    </form>
  </Dialog.Content></Dialog.Portal></Dialog.Root>
}

const slugify = (value = '') => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 160)

export default function ContentManager({ kind }) {
  const config = contentTypes[kind]
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')
  const [editor, setEditor] = useState(null)
  const [deleting, setDeleting] = useState(null)
  const [refresh, setRefresh] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true); setError('')
    adminApi(`/content/${kind}`, { signal: controller.signal }).then(data => setItems(data.items)).catch(err => { if (err.name !== 'AbortError') setError(err.message) }).finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [kind, refresh])
  async function remove(item) {
    if (!window.confirm(`Delete “${item[config.titleKey]}”? This permanently removes it from the website.`)) return
    setDeleting(item.id); setError(''); setMessage('')
    try { await adminApi(`/content/${kind}/${item.id}?version=${item.version}`, { method: 'DELETE' }); setItems(items => items.filter(existing => existing.id !== item.id)); setMessage('Content deleted.') }
    catch (err) { setError(err.message) }
    finally { setDeleting(null) }
  }
  function saved(item) {
    setItems(previous => [...previous.filter(existing => existing.id !== item.id), item].sort((a, b) => a.sortOrder - b.sortOrder))
    setEditor(null); setMessage(item.status === 'published' ? 'Saved and published to the website.' : 'Draft saved. It is not visible on the website.')
  }
  const visible = items.filter(item => (status === 'all' || item.status === status) && `${item[config.titleKey]} ${item.slug}`.toLowerCase().includes(query.toLowerCase()))
  return <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4"><div><h1 className="page-heading">{config.label}</h1><p className="page-description">Manage the {config.label.toLowerCase()} displayed on your website.</p></div><Button onClick={() => setEditor({ ...blankFields(config.fields), status: 'draft', sortOrder: items.length ? Math.max(...items.map(item => item.sortOrder)) + 1 : 0 })} disabled={loading || !!error}><Plus />Add {config.singular}</Button></div>
    {message && <p role="status" className="rounded-md border bg-muted/40 p-3 text-sm">{message}</p>}
    {error && <div role="alert" className="flex flex-wrap items-center gap-3 rounded-md border border-destructive/30 p-3 text-sm"><span className="flex-1">{error}</span><Button variant="outline" size="sm" onClick={() => setRefresh(count => count + 1)}><RefreshCw />Reload</Button></div>}
    <div className="flex flex-wrap gap-3"><div className="relative flex-1"><Search className="absolute left-3 top-3 size-4 text-muted-foreground" /><input className="form-input pl-9" aria-label={`Search ${config.label.toLowerCase()}`} placeholder={`Search ${config.label.toLowerCase()}…`} value={query} onChange={event => setQuery(event.target.value)} /></div><select className="form-input w-auto" aria-label="Filter status" value={status} onChange={event => setStatus(event.target.value)}><option value="all">All statuses</option><option value="published">Published</option><option value="draft">Drafts</option></select></div>
    <Card><CardContent>{loading ? <p role="status" className="py-12 text-center text-muted-foreground">Loading content…</p> : !visible.length ? <div className="py-12 text-center"><p className="font-medium">{items.length ? 'No matching content' : `No ${config.label.toLowerCase()} yet`}</p><p className="mt-2 text-sm text-muted-foreground">{items.length ? 'Try another search or status.' : `Add your first ${config.singular} to get started.`}</p></div> : <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr className="border-b text-muted-foreground"><th className="p-3 font-medium">Name</th><th className="p-3 font-medium">Status</th><th className="p-3 font-medium">Order</th><th className="p-3 text-right font-medium">Actions</th></tr></thead><tbody>{visible.map(item => <tr key={item.id} className="border-b last:border-0"><td className="p-3"><div className="flex items-center gap-3">{item[config.imageKey] && <img src={imageUrl(item[config.imageKey])} alt="" className="size-10 shrink-0 rounded-md border object-cover" />}<div><p className="min-w-36 font-medium">{item[config.titleKey]}</p><p className="mt-1 text-xs text-muted-foreground">{item.slug}</p></div></div></td><td className="p-3"><span className={`rounded-full px-2 py-1 text-xs ${item.status === 'published' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>{item.status}</span></td><td className="p-3">{item.sortOrder}</td><td className="p-3"><div className="flex justify-end gap-1">{item.status === 'published' && <Button asChild variant="ghost" size="icon"><a href={`${SITE_BASE}${config.publicPath}/${item.slug}`} target="_blank" rel="noreferrer" aria-label={`View ${item[config.titleKey]}`}><ExternalLink /></a></Button>}<Button variant="ghost" size="icon" aria-label={`Edit ${item[config.titleKey]}`} onClick={() => setEditor(item)}><Pencil /></Button><Button variant="ghost" size="icon" aria-label={`Delete ${item[config.titleKey]}`} disabled={deleting === item.id} onClick={() => remove(item)}><Trash2 className="text-destructive" /></Button></div></td></tr>)}</tbody></table></div>}</CardContent></Card>
    {editor && <Editor kind={kind} item={editor} onClose={() => setEditor(null)} onSaved={saved} />}
  </div>
}
