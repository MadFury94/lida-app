export default function Header() {
  return (
    <div dangerouslySetInnerHTML={{__html: `                 <header class="header-section header-1" id="sticky-header">
                <div class="header-main">

                    <!-- ===================== DESKTOP NAVBAR ===================== -->
                    <nav class="navbar p-0 navbar-expand-xl d-none d-xl-flex">
                        <a class="navbar-brand" href="index.html">
                                <img src="/assets/img/logo/white-logo.svg" alt="logo">
                            </a>

                            <button class="navbar-toggler" type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse show" id="navbarSupportedContent">

                                <ul class="navbar-nav mx-auto mb-lg-0">

                                    <!-- HOME -->
                                    <li class="nav-item menu-thumb">
                                        <a class="nav-link active" href="#">
                                            Home <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <ul class="sub-menu has-homemenu list-unstyled">
                                            <li>
                                                <div class="homemenu-items">
                                                    <div class="row row-cols-xl-5 row-cols-md-2 row-cols-2">
                                                        <div class="col homemenu">
                                                            <div class="homemenu-thumb">
                                                                <img src="/assets/img/header/home-1.jpg" alt="img">
                                                                <div class="demo-button">
                                                                   <a class="theme-btn" href="index.html">
                                                                        Dark Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                    <a class="theme-btn mt-2" href="index-white.html">
                                                                        Light Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="homemenu-content text-center">
                                                                <div class="hometitle">
                                                                    Creative Agency
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col homemenu">
                                                            <div class="homemenu-thumb">
                                                                <img src="/assets/img/header/home-2.jpg" alt="img">
                                                                <div class="demo-button">
                                                                   <a class="theme-btn" href="index-2.html">
                                                                        Dark Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                    <a class="theme-btn mt-2" href="index-white-2.html">
                                                                        Light Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="homemenu-content text-center">
                                                                 <div class="hometitle">
                                                                   Digital Agency
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col homemenu">
                                                            <div class="homemenu-thumb">
                                                                <img src="/assets/img/header/home-3.jpg" alt="img">
                                                                <div class="demo-button">
                                                                   <a class="theme-btn" href="index-3.html">
                                                                        Dark Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                    <a class="theme-btn mt-2" href="index-white-3.html">
                                                                        Light Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="homemenu-content text-center">
                                                                 <div class="hometitle">
                                                                   IT Solutions
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col homemenu">
                                                            <div class="homemenu-thumb">
                                                                <img src="/assets/img/header/home-4.jpg" alt="img">
                                                                <div class="demo-button">
                                                                   <a class="theme-btn" href="index-4.html">
                                                                        Dark Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                    <a class="theme-btn mt-2" href="index-white-4.html">
                                                                        Light Home <i class="fa-solid fa-arrow-up-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="homemenu-content text-center">
                                                                 <div class="hometitle">
                                                                   Design Studio
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col homemenu">
                                                            <div class="homemenu-thumb">
                                                                <img src="/assets/img/header/home-5.jpg" alt="img">
                                                            </div>
                                                            <div class="homemenu-content text-center">
                                                                 <span class="hometitle">
                                                                   Coming Soon
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <!-- ABOUT -->
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html">About Us</a>
                                    </li>

                                    <!-- SERVICES -->
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Services <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <ul class="sub-menu list-unstyled">
                                            <li><a href="service.html">Service Page</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>

                                    <!-- PAGES -->
                                    <li class="has-dropdown nav-item">
                                        <a class="nav-link" href="javascript:void(0)">
                                            Pages <i class="fas fa-chevron-down"></i>
                                        </a>

                                        <ul class="sub-menu list-unstyled">
                                           
                                            <li class="has-dropdown">
                                                <a href="javascript:void(0)">
                                                    Portfolio <i class="fas fa-angle-right"></i>
                                                </a>
                                                <ul class="sub-menu list-unstyled">
                                                    <li><a href="project.html">Portfolio page</a></li>
                                                    <li><a href="project-details.html">Portfolio Details</a></li>
                                                </ul>
                                            </li>

                                            <!-- Projects -->
                                            <li class="has-dropdown">
                                                <a href="javascript:void(0)">
                                                    Team <i class="fas fa-angle-right"></i>
                                                </a>
                                                <ul class="sub-menu list-unstyled">
                                                    <li><a href="team.html">Team page</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="pricing.html">Pricing Page</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="404.html">404 Error</a></li>
                                        </ul>
                                    </li>

                                    <!-- BLOG -->
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Blog <i class="fas fa-chevron-down"></i>
                                        </a>
                                        <ul class="sub-menu list-unstyled">
                                            <li><a href="news-grid.html">Blog Grid</a></li>
                                            <li><a href="news.html">Blog Standard</a></li>
                                            <li><a href="news-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>

                                    <!-- CONTACT -->
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact</a>
                                    </li>

                                </ul>

                                <div class="menu-right-info">
                                    <a href="#" class="main-header__search search-toggler">
                                        <i class="fa-regular fa-magnifying-glass"></i>
                                    </a>
                                    <div class="sidebar__toggle offcanvas-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                            </div>
                    </nav>

                </div>

                <div class="offcanvas-overlay position-fixed top-0 start-0 w-100 h-100"></div>
                <div class="offcanvas-menu position-fixed">
                    <div class="header-top d-flex align-items-center justify-content-between gap-4">
                        <div class="logo">
                            <a href="index.html">
                            <img src="/assets/img/logo/white-logo.svg" alt="logo">
                            </a>
                        </div>
                        <button class="offcasvas-close black-bg border-0 text-white d-flex align-items-center justify-content-center rounded-pill">
                            <i class="fa-regular fa-xmark"></i>
                        </button>
                    </div>
                    <span class="action-title">Happy You’re Here</span>
                    <a href="contact.html" class="news-btn">
                        <span class="text">
                            <span class="text-default">Know more us  <i class="fa-regular fa-arrow-up-right"></i></span>
                            <span class="text-hover">Know more us  <i class="fa-regular fa-arrow-up-right"></i></span>
                        </span>
                    </a>
                    <div class="offcanvas_gallery d-none d-lg-block">
                        <img class="gallery_img" src="/assets/img/header/offcanvas1.jpg" alt="gallery">
                        <img class="gallery_img" src="/assets/img/header/offcanvas2.jpg" alt="gallery">
                        <img class="gallery_img" src="/assets/img/header/offcanvas3.jpg" alt="gallery">
                        <img class="gallery_img" src="/assets/img/header/offcanvas4.jpg" alt="gallery">
                    </div>
                    <div class="off-contact-info">
                    <span class="info-title">Contact Info</span>
                    <div class="contact-details">
                        <span class="sub-info">Phone</span>
                        <p>
                            <a href="tel:+18005550123">+1 (800) 555-0123</a>
                        </p>
                    </div>
                    <div class="contact-details">
                        <span class="sub-info">Email</span>
                        <p>
                            <a href="mailto:hello@orixo.com">hello@orixo.com</a>
                        </p>
                    </div>
                    <div class="contact-details">
                        <span class="sub-info">Location</span>
                        <p>
                            374 William S Canning Blvd USA
                        </p>
                    </div>
                    </div>
                    <div class="social-icon-list">
                        <span class="follow-title">
                            Follow us:
                        </span>
                        <div class="social-icon d-flex align-items-center">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-vimeo-v"></i></a>
                            <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        </div>
                        
                    </div>
                </div>

                <!-- ===================== MOBILE MENU ===================== -->
                <div class="mobile-menu-area d-block d-xl-none">

                    <div class="container">
                        <div class="mobile-topbar">
                            <div class="d-flex justify-content-between align-items-center">

                                <div class="logo">
                                    <a href="index.html">
                                        <img src="/assets/img/logo/white-logo.svg" alt="logo">
                                    </a>
                                </div>

                                <div class="menu-search d-flex align-items-center gap-4">
                                 <a href="#" class="main-header__search search-toggler">
                                    <i class="fa-regular fa-magnifying-glass"></i>
                                </a>
                                <div class="bars">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                               </div>

                            </div>
                            
                        </div>
                    </div>

                    <div class="mobile-menu-overlay"></div>

                    <div class="mobile-menu-main">

                        <div class="logo">
                            <a href="index.html">
                                <img src="/assets/img/logo/white-logo.svg" alt="logo">
                            </a>
                        </div>

                        <div class="close-mobile-menu">
                            <i class="fas fa-times"></i>
                        </div>

                        <div class="menu-body">
                            <div class="menu-list">
                                <ul class="list-unstyled">

                                    <li class="sub-mobile-menu">
                                        <a href="javascript:void(0)">
                                            Home <i class="fas fa-chevron-down float-end"></i>
                                        </a>
                                        <ul class="list-unstyled">
                                            <li><a href="index.html">Creative Agency (Dark)</a></li>
                                            <li><a href="index-white.html">Creative Agency (Light)</a></li>
                                            <li><a href="index-2.html">Digital Agency (Dark)</a></li>
                                            <li><a href="index-white-2.html">Digital Agency (Light)</a></li>
                                            <li><a href="index-3.html">IT Solutions (Dark)</a></li>
                                            <li><a href="index-white-3.html">IT Solutions (Light)</a></li>
                                            <li><a href="index-4.html">Design Studio (Dark)</a></li>
                                            <li><a href="index-white-4.html">Design Studio (Light)</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="about.html">About Us</a></li>

                                    <li class="sub-mobile-menu">
                                        <a href="javascript:void(0)">
                                            Services <i class="fas fa-chevron-down float-end"></i>
                                        </a>
                                        <ul class="list-unstyled">
                                            <li><a href="service.html">Service Page</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>

                                     <li class="sub-mobile-menu has-dropdown">
                                        <a href="javascript:void(0)">
                                            Pages <i class="fas fa-chevron-down float-end"></i>
                                        </a>
                                        <ul class="list-unstyled">
                                            <li class="sub-child-menu has-dropdown">
                                                <a href="javascript:void(0)">
                                                    Portfolio <i class="fas fa-chevron-down float-end"></i>
                                                </a>
                                                <ul class="list-unstyled">
                                                    <li><a href="project.html">Portfolio page</a></li>
                                                    <li><a href="project-details.html">Portfolio Details</a></li>
                                                </ul>
                                            </li>

                                            <li class="sub-child-menu has-dropdown">
                                                <a href="javascript:void(0)">
                                                    Team <i class="fas fa-chevron-down float-end"></i>
                                                </a>
                                                <ul class="list-unstyled">
                                                    <li><a href="team.html">Team page</a></li>
                                                    <li><a href="team-details.html">Team Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="pricing.html">Pricing Page</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="404.html">404 Error</a></li>
                                        </ul>
                                    </li>
                                    <li class="sub-mobile-menu">
                                        <a href="javascript:void(0)">
                                            Blog <i class="fas fa-chevron-down float-end"></i>
                                        </a>
                                        <ul class="list-unstyled">
                                            <li><a href="news-grid.html">Blog Grid</a></li>
                                            <li><a href="news.html">Blog Standard</a></li>
                                            <li><a href="news-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="off-contact-area">
                            <div class="off-contact-info">
                                <span class="info-title">Contact Info</span>
                                <div class="contact-details">
                                    <span class="sub-info">Phone</span>
                                    <p>
                                        <a href="tel:+18005550123">+1 (800) 555-0123</a>
                                    </p>
                                </div>
                                <div class="contact-details">
                                    <span class="sub-info">Email</span>
                                    <p>
                                        <a href="mailto:hello@orixo.com">hello@orixo.com</a>
                                    </p>
                                </div>
                                <div class="contact-details">
                                    <span class="sub-info">Location</span>
                                    <p>
                                        374 William S Canning Blvd USA
                                    </p>
                                </div>
                            </div>
                            <div class="social-icon-list">
                                <span class="follow-title">
                                    Follow us:
                                </span>
                                <div class="social-icon d-flex align-items-center">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-vimeo-v"></i></a>
                                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
                <!-- ===================== MOBILE MENU END ===================== -->

            </header>

            <!-- Search Start -->
            <div class="search-popup">
                <div class="search-popup__overlay search-toggler"></div>
                <div class="search-popup__content">
                    <form role="search" method="get" class="search-popup__form" action="#">
                        <input type="text" id="search" name="search" placeholder="Search Here...">
                        <button type="submit" aria-label="search submit" class="search-btn">
                            <span><i class="fa-regular fa-magnifying-glass"></i></span>
                        </button>
                    </form>
                </div>
            </div>

`}} />
  )
}
