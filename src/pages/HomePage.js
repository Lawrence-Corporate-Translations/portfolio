import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../assets/images/logo.png";

// Simple Button component since we don't have access to the external one
const Button = ({ children, className, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', margin: 0, padding: 0 }}>
      <main style={{ 
        height: '100vh', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif'
      }}>
        {/* Header: Fixed Height */}
        <header style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 50,
          flexShrink: 0
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <img 
              src={logo} 
              alt="LangBridge Logo" 
              style={{
                height: '40px',
                width: 'auto'
              }}
            />
            <span style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#dc2626' 
            }}>
              Lawrence Corporate Translations
            </span>
          </div>

          <nav style={{ 
            display: 'flex', 
            gap: '24px',
            '@media (max-width: 768px)': { display: 'none' }
          }}>
            {[
              { label: "Home", path: "/" },
              { label: "Contact Us", path: "/contact" },
              { label: "Our Services", path: "/services" },
              { label: "About Us", path: "/about" }
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                style={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                  color: '#374151',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#374151';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#374151';
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'block' }}>
            <Menu style={{ width: '24px', height: '24px', color: '#374151' }} />
          </div>

          <Button style={{
            backgroundColor: '#dc2626',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}>
            Request a Quote
          </Button>
        </header>

        {/* Hero Section: Fills remaining height */}
        <section style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textAlign: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2840&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div style={{
            position: 'relative',
            zIndex: 10,
            color: 'white',
            maxWidth: '800px',
            padding: '48px 24px'
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontFamily: 'serif',
              fontStyle: 'italic',
              lineHeight: '1.2',
              marginBottom: '24px',
              fontWeight: 'normal'
            }}>
              Understanding Corporate Translation
              <br />
              Services for Businesses
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: '300',
              lineHeight: '1.6',
              margin: 0
            }}>
              Empower your global reach with our expert translation solutions tailored for enterprises.
            </p>
          </div>
        </section>

        {/* Slider Navigation */}
        <div style={{
          padding: '24px 0',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          flexShrink: 0
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            color: '#dc2626',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'none',
              border: 'none',
              color: '#dc2626',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#b91c1c'}
            onMouseLeave={(e) => e.target.style.color = '#dc2626'}>
              <span style={{ fontSize: '24px' }}>&lt;</span>
              <span>Previous</span>
            </button>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#dc2626'
              }}></div>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#d1d5db'
              }}></div>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#d1d5db'
              }}></div>
            </div>
            
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'none',
              border: 'none',
              color: '#dc2626',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#b91c1c'}
            onMouseLeave={(e) => e.target.style.color = '#dc2626'}>
              <span>Next</span>
              <span style={{ fontSize: '24px' }}>&gt;</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}