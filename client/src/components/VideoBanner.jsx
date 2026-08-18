import { contact } from '../store/site'

/**
 * VideoBanner
 *
 * Props:
 *  - thumbnail  {string}  Image URL for the banner. Defaults to the YouTube maxres thumbnail.
 *  - videoUrl   {string}  YouTube watch URL. Defaults to contact.videoUrl from site.js.
 *  - textCircle {string}  Path to the rotating text-circle image.
 *  - className  {string}  Extra class names on the wrapper (e.g. "about-video-banner-about-page").
 */
export default function VideoBanner({
  thumbnail,
  videoUrl,
  textCircle = '/assets/img/home-1/text-circle.png',
  className = 'video-banner',
}) {
  const url = videoUrl || contact.videoUrl

  // Derive YouTube video ID and auto-generate thumbnail if none supplied
  const videoId = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1]
  const thumb = thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '')

  return (
    <div className={`${className} fix`}>
      <img data-speed=".8" src={thumb} alt="Watch our video" style={{ display: 'block' }} />
      <div className="video-circle">
        <a href={url} className="video-btn ripple video-popup">
          <i className="fa-solid fa-play"></i>
        </a>
        <div className="text-circle">
          <img src={textCircle} alt="" />
        </div>
      </div>
    </div>
  )
}
