import React, { useState } from 'react';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import '../CSS/PricingPage.css';
import BasicHeader from './BasicHeader';
const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');

  // Calculate the savings percentage based on monthly vs yearly pricing
  const savingsPercent = 40;
  
  // Pricing data
  const plans = [
    {
      name: "Essential",
      monthlyPrice: 15.99,
      yearlyPrice: 9.99,
      color: "#6366f1",
      popular: false,
      credits: 200,
      features: [
        "Smart content generation with AI",
        "Custom captions in 15+ languages",
        "Social media direct publishing",
        "Creative studio editor",
        "Basic template access",
        "Remove watermarks",
        "Filter library"
      ]
    },
    {
      name: "Premium",
      monthlyPrice: 29.99,
      yearlyPrice: 12.50,
      color: "#8b5cf6",
      popular: true,
      credits: 4000,
      features: [
        "Everything in Essential, plus:",
        "Advanced AI engine",
        "Content from unlimited sources",
        "Export to professional editing software",
        "Collaboration with up to 3 team members",
        "4 branded templates",
        "8 social platform connections",
        "Multiple aspect ratios support",
        "Content scheduling calendar"
      ]
    },
    {
      name: "Enterprise",
      color: "#ec4899",
      popular: false,
      features: [
        "Everything in Premium, plus:",
        "Expedited content processing",
        "Custom credit packages",
        "White-labeled exports",
        "Enterprise-grade templates & fonts",
        "Brand voice customization",
        "Dedicated cloud storage",
        "API & custom workflow integration",
        "Enterprise SLA & support",
        "Dedicated success manager",
        "Advanced security & compliance"
      ]
    }
  ];

  return (
    <div className="pricing-container">
      <BasicHeader />
      <div className="pricing-wrapper">
        <div className="pricing-header">
          <h1 className="pricing-title">Choose Your <span className="pricing-title-highlight">Creative Power</span></h1>
          <p className="pricing-subtitle">Unlock your creative potential with a plan that fits your needs</p>
        </div>

        {/* Billing toggle */}
        <div className="billing-toggle-container">
          <div className="billing-toggle">
            <button
              className={`billing-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`billing-option ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="savings-badge">
                Save {savingsPercent}%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards - now in a row */}
        <div className="pricing-cards">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{ borderColor: plan.popular ? plan.color : 'transparent' }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={14} />
                  Most Popular
                </div>
              )}
              
              <div className="pricing-card-content">
                <h3 className="plan-name">{plan.name}</h3>
                
                {plan.name !== "Enterprise" ? (
                  <>
                    <div className="price-container">
                      <div className="original-price">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : (plan.monthlyPrice * 12).toFixed(2)}
                      </div>
                      <div className="current-price" style={{ color: plan.color }}>
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </div>
                      <div className="price-period">/{billingCycle === 'monthly' ? 'mo' : 'mo'}</div>
                    </div>
                    <div className="billing-info">
                      {billingCycle === 'yearly' && (
                        <div>
                          ${(plan.yearlyPrice * 12).toFixed(2)} billed annually
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="enterprise-price">
                    <div className="custom-pricing" style={{ color: plan.color }}>
                      Custom Pricing
                    </div>
                    <div className="enterprise-subtitle">
                      Tailored for your business needs
                    </div>
                  </div>
                )}
                
                <button 
                  className={`plan-button ${plan.name === "Enterprise" ? "enterprise" : plan.popular ? "popular" : ""}`}
                  style={{ 
                    background: plan.name === "Enterprise" || plan.popular ? 
                      `linear-gradient(to right, ${plan.color}, ${adjustColor(plan.color, -20)})` : 
                      ''
                  }}
                >
                  {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                  <ArrowRight size={16} />
                </button>
                
                {plan.name !== "Enterprise" && (
                  <div className="credits-info">
                    <Zap size={18} className="credits-icon" />
                    <span>
                      <strong>{plan.credits}</strong> credits
                      {plan.name === "Premium" && " per year, instantly available"}
                    </span>
                  </div>
                )}
                
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`feature-item ${
                      feature.includes("Everything in") ? "feature-heading" : ""
                    }`}>
                      <Check size={18} className={`feature-check ${
                        feature.includes("Everything in") ? "muted" : ""
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="cta-container">
          <h3 className="cta-title">Not sure which plan is right for you?</h3>
          <p className="cta-subtitle">Our team can help you find the perfect solution for your creative needs</p>
          <button className="cta-button">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to adjust color brightness
function adjustColor(hex, percent) {
  // Convert hex to RGB
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  // Adjust brightness
  r = Math.max(0, Math.min(255, r + percent));
  g = Math.max(0, Math.min(255, g + percent));
  b = Math.max(0, Math.min(255, b + percent));

  // Convert back to hex
  const rr = r.toString(16).padStart(2, '0');
  const gg = g.toString(16).padStart(2, '0');
  const bb = b.toString(16).padStart(2, '0');
  
  return `#${rr}${gg}${bb}`;
}

export default PricingPage;