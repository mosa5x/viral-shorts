import React from 'react';
import '../CSS/LandingPage.css'; // Create this CSS file

function LandingPage() {
  return (
    <div className="landing-page">
        <header class="header">
            <div class="header-content">
                <div class="logo">Opus</div>
                <nav class="nav">
                <div class="dropdown">
                    <button class="dropbtn">Features</button>
                    <div class="dropdown-content">
                    <a href="#">ClipAnything</a>
                    <a href="#">Animated captions</a>
                    <a href="#">AI Reframe</a>
                    <a href="#">AI B-Roll</a>
                    <a href="#">Social scheduler</a>
                    <a href="#">Brand template</a>
                    <a href="#">Editor</a>
                    <a href="#">Export to XML</a>
                    <a href="#">Team workspace</a>
                    </div>
                </div>
                <a href="#pricing">Pricing</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
                </nav>
                <button class="sign-up-button">Sign Up</button>
            </div>
        </header>


      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Long Videos into Viral Clips</h1>
          <p>We Don't miss Viral Clips Like Others AI VIDEO CLIPPING TOOLs, Don't Waste your Time and Go Viral with us.</p>
          <button className="start-free-button">Start Free Trial</button>
        </div>
        <div className="hero-image">
          {/* Replace with an actual image or video */}
          <img src="placeholder-hero.png" alt="Hero" />
        </div>
      </section>
      <section className="client-logos">
        <div className="client-logos-container">
          <div className="client-logos-scroll">
            <div className="client-logo-item">
              <img src="path-to-justin-jefferies-logo.png" alt="Justin Jefferies" />
              <p>Justin Jefferies<br />6.2K</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-flagrant-logo.png" alt="FLAGRANT" />
              <p>FLAGRANT<br />1.5M</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-mai-pham-logo.png" alt="Mai Pham" />
              <p>Mai Pham<br />3.3M</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-valuetainment-logo.png" alt="Valuetainment" />
              <p>Valuetainment<br />5.3M</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-jubilee-media-logo.png" alt="Jubilee Media" />
              <p>Jubilee Media<br />9.79M</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-tom-bilyeu-logo.png" alt="Tom Bilyeu" />
              <p>Tom Bilyeu<br />4.5M</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-jacksfilms-logo.png" alt="Jacksfilms" />
              <p>Jacksfilms<br />5.08M</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-grant-cardone-logo.png" alt="Grant Cardone" />
              <p>Grant Cardone<br />4.7M</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-scott-galloway-logo.png" alt="Scott Galloway" />
              <p>Scott Galloway<br />162K</p>
            </div>
            <div className="client-logo-item">
              <img src="path-to-visa-logo.png" alt="VISA" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-audacy-logo.png" alt="Audacy" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-univision-logo.png" alt="Univision" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-chili-piper-logo.png" alt="CHILI PIPER" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-memphis-logo.png" alt="MEMPHIS" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-zoominfor-logo.png" alt="zoominfor" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-telefonica-logo.png" alt="Telefónica" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-nvidia-logo.png" alt="NVIDIA" />
            </div>
            <div className="client-logo-item">
              <img src="path-to-github-logo.png" alt="GitHub" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why We Are The Best In The Market</h2>

        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <img src="placeholder-feature1.png" alt="Feature 1" />
            <h3>AI-Powered Clipping</h3>
            <p>We have the best AI models to automatically identify and extract the most engaging moments.</p>
          </div>
          <div className="feature-item">
            <img src="placeholder-feature2.png" alt="Feature 2" />
            <h3>Automate b roll adding</h3>
            <p>We customized our Ai models to know what are the best moments to add b roll.</p>
          </div>
          <div className="feature-item">
            <img src="placeholder-feature3.png" alt="Feature 3" />
            <h3>Auto reframing</h3>
            <p>Don't wast you time manualy cropping around the facese our Ai model do this for you .</p>
          </div>
          <div className="feature-item">
            <img src="placeholder-feature4.png" alt="Feature 4" />
            <h3>Subtitle Generation</h3>
            <p>Automatically create accurate and engaging subtitles.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing Plans</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p className="price">$9/month</p>
            <ul>
              <li>5 Videos/month</li>
              <li>Standard Features</li>
              <li>Email Support</li>
            </ul>
            <button className="select-plan-button">Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Pro</h3>
            <p className="price">$29/month</p>
            <ul>
              <li>Unlimited Videos</li>
              <li>Advanced Features</li>
              <li>Priority Support</li>
            </ul>
            <button className="select-plan-button">Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">Contact Us</p>
            <ul>
              <li>Custom Solutions</li>
              <li>Dedicated Support</li>
              <li>API Access</li>
            </ul>
            <button className="contact-us-button">Contact Us</button>
          </div>
        </div>
      </section>



      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Opus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;