
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./button";
import logo from "../assets/images/logo.png";

export default function Header(){
    return(
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
    )
}
