import React from "react";
import image from './deeees.png'
import currency from './currency.png'
import snippet from './snippet.png'
import user from './user.png'
import hubs from './hubs.png'
import global from './global.png'
import log from './log.png'
import logos from './logos.png'
import logic from './logic.png'
import market from './market.png'
import ghandi from './ghandi.png'


/**
 * ImgFallback: shows a simple gray placeholder when image fails to load
 */
function ImgFallback({ src, alt, style }) {
  const [broken, setBroken] = React.useState(false);

  if (broken) {
    return (
      <div
        aria-label={alt}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f4f6",
          color: "#6b7280",
          fontSize: 14,
          borderRadius: style?.borderRadius || 0,
          minHeight: style?.height || 80,
        }}
      >
        {alt || "Image"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      onError={() => setBroken(true)}
    />
  );
}

// FAQ Item Component
function FAQItem({ question, answer, isOpen }) {
  const [open, setOpen] = React.useState(isOpen);

  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 600 }}>{question}</div>
        <div style={{ fontSize: 28, color: "#999" }}>{open ? "×" : "+"}</div>
      </div>

      {open && answer && (
        <div
          style={{
            marginTop: 20,
            fontSize: 16,
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        width: "100%",
        margin: 0,
        padding: 0,
        background: "#fff",
        color: "#111",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          background: "#0d3b37",
          color: "white",
          padding: "8px 0",
          textAlign: "center",
          fontSize: 14,
        }}
      >
        🚀 Session 2024 • Early-bird registration now open ➤
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
        }}
      >
        <div style={{ fontSize: 25, fontWeight: 600, color: "#0d3b37" }}>
          Ascone
        </div>

        <div style={{ display: "flex", gap: 30, fontSize: 13, marginRight:"35%", fontWeight:"bold" }}>
          <span>Features</span>
          <span>Accounts</span>
          <span>Company</span>
          <span>Insight</span>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <button style={{ background: "none", border: "none", fontSize: 13, cursor: "pointer" }}>
            Login
          </button>
          <button
            style={{
              background: "#0d3b37",
              color: "white",
              padding: "10px 20px",
              borderRadius: 30,
              border: "none",
              cursor: "pointer",
              fontSize:14
            }}
          >
            Sign Up ➤
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "60px 40px",
          minHeight: 320,
          marginLeft:"70px"
        }}
      >
        <div style={{ width: "50%" }}>
          <div style={{ color: "#125c28ff", fontWeight: 600, fontSize: 13 }}>
            TRY IT NOW!
          </div>

          <h1
            style={{
              fontSize: 60,
              fontWeight: 550,
              lineHeight: "70px",
              marginTop: 20,
              fontFamily:"sans serif"
  
            }}
          >
            Change the way <br /> you use your <br />
            <span style={{ color: "#0d3b37", fontStyle: "italic" }}>money</span>
          </h1>

          <p style={{ fontSize: 15, marginTop: 40, color: "#868585ff", fontWeight:550 }}>
            From your everyday spending, to planning for your future <br/> with
            savings and investments, Ascone helps you get <br/> more from your money.
          </p>
   <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
  <a 
    href="#" 
    style={{ 
      backgroundColor: "#1c3f3a", 
      color: 'white', 
      padding: '12px 24px', 
      borderRadius: '25px', 
      textDecoration: 'none', 
      fontWeight: '400', 
      display: 'inline-block', 
      fontSize:14
    }}
  >
    Get Started Now
  </a>
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <div style={{  gap: '2px', marginTop:15 }}>
      <span style={{ color: '#ffd700', fontSize: '15px'}}>⭐</span>
      <span style={{ color: '#ffd700', fontSize: '15px' }}>⭐</span>
      <span style={{ color: '#ffd700', fontSize: '15px' }}>⭐</span>
      <span style={{ color: '#ffd700', fontSize: '15px' }}>⭐</span>
      <span style={{ color: '#ffd700', fontSize: '15px' }}>⭐</span><br/>
      <p style={{ fontSize: '12px', color: '#666', marginTop:10 }}>from 120+ <span style={{textDecoration:"underline", fontWeight:"bold", color:"black"}}>reviews</span></p>
    </div>
    <p style={{ fontWeight: 'bold', fontSize: '15px' }}>5.0</p>
  
  </div>
</div>
        </div>

        {/* HERO CARDS */}
        <div
          style={{
            width: "40%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            marginRight:"50px"
          }}
        >
          <div style={{ background: "#e7ecec", padding: 0, borderRadius: 0 }}>
            <ImgFallback
              src={image}
              alt="hero"
              style={{ width: "100%", height:"100%", borderRadius: 0 }}
            />
          </div>

          <div
            style={{
              backgroundI: "#f0efe3",
              padding: 0,
              borderRadius: 0,
              textAlign: "center",
            }}
            >
            <ImgFallback src={currency} style={{width:"100%", height:"100%"}}/>
          
            <div style={{ fontSize: 48, fontWeight: 700 }}></div>
            <div style={{ fontSize: 18 }}></div>
          </div>

          <div
            style={{
              background: "#edf0f2",
              padding: 0,
              borderRadius: 0,
              textAlign: "center",
            }}
          >
            <ImgFallback src={user} style={{width:"100%", height:"100%",borderRadius:0}}/>
            <div style={{ fontSize: 22, fontWeight: 600, color: "#0d3b37" }}>
              
            </div>
            <div style={{ marginTop: 10 }}></div>
          </div>

          <div
            style={{
              background: "#0d3b37",
              padding: 0,
              borderRadius: 0,
              color: "white",
            }}
          >
            <ImgFallback src={snippet} style={{width:"100%", height:"100%", borderRadius:0}}/>
            <div style={{ fontSize: 32, fontWeight: 700 }}></div>
            <div style={{ marginTop: 0 }}></div>
          </div>
        </div>
      </div>

      {/* PARTNER LOGOS */}
      <div
        style={{
          width: "100%",
          padding: "60px 0",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "center",
          minHeight: 120,
        }}
      >
        <ImgFallback
          src={hubs}
          alt="partners"
          style={{ width: "90%", maxWidth: 900, borderRadius: 6 }}
        />
      </div>

      {/* ABOUT SECTION */}
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <div style={{ color: "#0c613dff", fontSize: 12, fontWeight: 600 }}>
          ABOUT US
        </div>
        <h2 style={{ fontSize: 45, fontWeight: 550, marginTop: 10 }}>
          One app for all your <br /> money things
        </h2>
        <p
          style={{
            fontSize: 15,
            marginTop: 20,
            color: "#818181ff",
            maxWidth: 700,
            margin: " auto",
            fontWeight:600
          }}
        >
          Remove all the friction that stands in the way of <br/> your money goals.
        </p>
      </div>

      {/* SAVINGS & GLOBAL TRANSFER SECTION */}
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: 0,
          gap: 20,
          minHeight: 300,
        }}
      >
        {/* LEFT SAVINGS CARD */}
        <div style={{ width: "25%", background: "#0d3b37", color: "white", padding: 20, height:"50%", marginLeft:"130px"}}>
    
          <h2 style={{ fontSize: 40, fontWeight: 600 }}>
            Grow savings
            <br />
            faster
          </h2>
          <div style={{ fontSize: 22, marginTop: 40 }}>$12,000</div>
          <div style={{ fontSize: 80, marginTop: 10 }}>⬆</div>

          <div style={{ height: 70, marginTop: 20, display: "flex", alignItems: "flex-end", gap: 12 }}>
            <div style={{ width: 20, height: 40, background: "#3e5f5c" }} />
            <div style={{ width: 20, height: 70, background: "#3e5f5c" }} />
            <div style={{ width: 20, height: 100, background: "#3e5f5c" }} />
            <div style={{ width: 20, height: 130, background: "#3e5f5c" }} />
          </div>
        </div>

        {/* RIGHT GLOBAL TRANSFER */}
        <div style={{ width: "52%", padding: 0 }}>
          

          <div style={{ marginTop: 0}}>
            <ImgFallback
              src={global}
              alt="global"
              style={{ width: "100%", borderRadius: 0,}}
            />
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div style={{ padding: "80px" }}>
        
        <div style={{display:"flex"}}>
          <p style={{color:"#0d4946ff", fontSize:13, fontWeight:600}}>VALUES</p>
        <h2 style={{ fontSize: 45, fontWeight: 550, color: "#0d1b2a", marginTop:45 }}>
          Make your <br /> spend, Well-spent
        </h2>

        <p style={{ maxWidth: 500, marginTop: 105, color: "#75777aff", fontSize: 16, textAlign:"left", marginLeft:"20%", fontWeight:600, fontFamily:"sans serif"}}>
          Manages a diversified group of specialized private credit <br/> brands with efficient tech-enabled processes.
        </p>
         </div>


        <div style={{ display: "flex", gap: 30, marginTop: 60 }}>
          {/* CARD 1 */}
          <div style={{ flex: 1, border: "1px solid #e5e7eb", padding: 40, borderRadius: 8 }}>
            <ImgFallback src={log} alt="icon" style={{ width: 60 }} />
            <h3 style={{ marginTop: 45, fontSize: 22, fontWeight: 600 }}>Transparency</h3>
            <p style={{ marginTop: 10, fontSize: 16, color: "#4a4a4a" }}>
              A departure from the industry norm of ambiguity.
            </p>
            <div style={{
              marginTop: 30,
              width: 45,
              height: 45,
              borderRadius: "50%",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>↗</div>
          </div>

          {/* CARD 2 */}
          <div style={{ flex: 1, border: "1px solid #e5e7eb", padding: 40, borderRadius: 8 }}>
            <ImgFallback src={logic} alt="icon" style={{ width: 60 }} />
            <h3 style={{ marginTop: 55, fontSize: 22, fontWeight: 600 }}>Creative expansion</h3>
            <p style={{ marginTop: 10, fontSize: 16, color: "#4a4a4a" }}>
              Our proprietary fintech platform helps locate and manage investments.
            </p>
            <div style={{
              marginTop: 30,
              width: 45,
              height: 45,
              borderRadius: "50%",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>↗</div>
          </div>

          {/* CARD 3 */}
          <div style={{ flex: 1, border: "1px solid #e5e7eb", padding: 40, borderRadius: 8, background: "#e8e6d7", borderTopRightRadius:"150px" }}>
            <ImgFallback src={logos} alt="icon" style={{ width: 60 }} />
            <h3 style={{ marginTop: 20, fontSize: 22, fontWeight: 600 }}>Private Credit Investments</h3>
            <p style={{ marginTop: 10, fontSize: 16, color: "#4a4a4a" }}>
              We provide access to unique private credit investments.
            </p>
            <div style={{
              marginTop: 30,
              width: 45,
              height: 45,
              borderRadius: "50%",
              background: "#0d3b37",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>↗</div>
          </div>
        </div>
      </div>

      {/* NUMBERS SECTION */}
      <div
        style={{
          width: "100%",
          marginTop: 0,
          backgroundImage: "url('/mnt/data/97b93cbe-c1cf-4566-b711-54af2e03a60a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#056e13ff",
          color: "white",
          padding: 0,
          display: "flex",
          alignItems: "center",
          minHeight: 320,
        }}
      >
        <ImgFallback src={market} style={{width:"100%", height:"100%", marginRight:"200px"}}/>
      </div>

      {/* FAQ SECTION */}
      <div style={{ padding: "100px 60px", background: "#fafafa" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* LEFT - FAQ HEADER */}
          <div style={{ width: "50%" }}>
            <div style={{ color: "#116b27ff", fontSize: 14, fontWeight: 600 }}>
              FAQ
            </div>
            <h2 style={{ fontSize: 50, fontWeight: 600, marginTop: 10 }}>
              Frequently asked questions
            </h2>
          </div>

          {/* RIGHT - FAQ ITEMS */}
          <div style={{ width: "50%", fontSize:0 }}>
            <FAQItem
              question="How sending a bank transfer"
              isOpen={false}
            />
            
            <FAQItem
              question="What is the scheduled payments feature?"
              answer="The scheduled payments feature allows you to manage all of your subscriptions or recurring payments in one place. This way, you can view details for every payment, which include the amount, frequency, payment dates etc."
              isOpen={true}
            />
            
            <FAQItem
              question="How can I reactivate a terminated card?"
              isOpen={false}
            />
            
            <FAQItem
              question="How about with a refund?"
              isOpen={false}
            />
            
            <FAQItem
              question="How can add money to my account?"
              isOpen={false}
            />
          </div>
        </div>
      </div>

      {/* FINAL CTA SECTION */}
      <div
        style={{
          width: "100%",
          background: "#1c3f3a",
          padding: "40px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          marginLeft:"%",
          marginRight:"%"

        
        }}
      >
        {/* DECORATIVE STARS */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 200,
            fontSize: 120,
            color: "rgba(255,255,255,0.15)",
          }}
        >
          ✦
        </div>
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            fontSize: 100,
            color: "rgba(255,255,255,0.15)",
          }}
        >
          ✦
        </div>

        {/* LEFT TEXT */}
        <div style={{ width: "50%", color: "white", zIndex: 1 }}>
          <h2 style={{ fontSize: 56, fontWeight: 700, lineHeight: "64px" }}>
            Change the way you <br />
            use your <span style={{ fontStyle: "italic" }}>money</span>
          </h2>
          <p style={{ fontSize: 18, marginTop: 20, opacity: 0.9 }}>
            Join over million people who choose Ascone <br />
            for fast and secure future banking.
          </p>
          <button
            style={{
              marginTop: 30,
              background: "white",
              color: "#0d3b37",
              padding: "14px 32px",
              borderRadius: 30,
              border: "none",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Get Started Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop:30
          }}
        >
          <div
            style={{
              width: 400,
              height: 300,
              borderRadius: "300px 200px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginTop:0
            }}
          >
            <ImgFallback src={ghandi} style={{width:"70%", height:"100%",borderTopRightRadius:150,marginTop:110, marginLeft:"20%"}}/>
            
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: "#f9fafb", padding: "80px 60px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 60, borderBottom: "1px solid #e5e7eb" }}>
          {/* Account Column */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 20, color: "#111" }}>Account</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 10, color: "#666" }}>
              <span style={{ cursor: "pointer" }}>Saving</span>
              <span style={{ cursor: "pointer" }}>Join Accounts</span>
              <span style={{ cursor: "pointer" }}>Crypto</span>
              <span style={{ cursor: "pointer" }}>Freelance</span>
              <span style={{ cursor: "pointer" }}>Commodities</span>
            </div>
          </div>

          {/* Help Column */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 20, color: "#111" }}>Help</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 10, color: "#666" }}>
              <span style={{ cursor: "pointer" }}>Customer Help</span>
              <span style={{ cursor: "pointer" }}>Community</span>
              <span style={{ cursor: "pointer" }}>Blog</span>
            </div>
          </div>

          {/* Finance Column */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 20, color: "#111" }}>Finance</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 10, color: "#666" }}>
              <span style={{ cursor: "pointer" }}>Cards</span>
              <span style={{ cursor: "pointer" }}>Linked Accounts</span>
              <span style={{ cursor: "pointer" }}>Payment</span>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 20, color: "#111" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 10, color: "#666" }}>
              <span style={{ cursor: "pointer" }}>About Us</span>
              <span style={{ cursor: "pointer" }}>Contact</span>
              <span style={{ cursor: "pointer" }}>Sustainability</span>
              <span style={{ cursor: "pointer" }}>Career</span>
            </div>
          </div>

          {/* Brand & Address */}
          <div style={{ maxWidth: 320 }}>
            <div style={{ fontSize: 58, fontWeight: 700, color: "#0d3b37", marginBottom: 30 }}>
              Ascone
            </div><br/>
            <div style={{ fontSize: 10, color: "#666", lineHeight: 1.8 }}>
              181 Bay StreetBay Wellington<br />
              Tower, Suite 292 Toronto,<br />
              OntarioM5J 2T3
            </div>
            <div style={{ marginTop: 30, fontSize: 14, color: "#666", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 10 }}>🇬🇧 English (UK)</span> 
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 40, fontSize: 10, color: "#999" }}>
          <div>© Ascone Finance Ltd 2023.</div>
          <div style={{ display: "flex", gap: 40 }}>
            <span style={{ cursor: "pointer", color: "#666" }}>Privacy Policy</span>
            <span style={{ cursor: "pointer", color: "#666" }}>Terms of Use</span>
            <span style={{ cursor: "pointer", color: "#666" }}>Disclosure</span>
          </div>
        </div>
      </div>
    </div>
  );
}