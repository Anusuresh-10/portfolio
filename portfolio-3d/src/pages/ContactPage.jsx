import { profile, socials } from "../data/portfolio";
import "./pages.css";

const links = [
  { icon:"📧", name:"Email", val:socials.email,     href:`mailto:${socials.email}`,     c:"#5CF29A" },
  { icon:"💼", name:"LinkedIn", val:"anu-suresh-8166192b7", href:socials.linkedin,       c:"#4D9FFF" },
  { icon:"🐙", name:"GitHub",   val:"Anusuresh-10",         href:socials.github,         c:"#9D7BFF" },
  { icon:"👾", name:"HackerRank", val:"Profile",           href:socials.hackerrank,     c:"#4DEEEA" },
  { icon:"📄", name:"Resume",   val:"Download PDF",         href:profile.resumeUrl,      c:"#FFB454" },
];

export default function ContactPage({ onBack }) {
  return (
    <div className="ps" style={{"--font-m":"'JetBrains Mono',monospace","--ac":"#5CF29A"}}>
      <div className="ps-bg"/><div className="ps-scan"/>
      <div className="bb">
        <button className="bb-back" onClick={onBack}>← Back to World</button>
        <div className="bb-right"><span className="bb-tag">contact_beacon</span></div>
      </div>

      <div className="ph ph-2col">
        <div>
          <div className="ph-eyebrow">Get In Touch</div>
          <h1>Let's <span className="gt-g">Connect</span></h1>
          <p className="ph-sub">I'm actively looking for SDE placements and internship opportunities. If you're hiring or want to collaborate, reach out!</p>
          <div style={{marginTop:24}}>
            <div className="avail">
              <span className="avail-dot"/>
              Available for SDE roles · Final Year 2026
            </div>
          </div>
        </div>

        {/* Globe decoration */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:220,position:"relative"}}>
          <div style={{width:200,height:200,borderRadius:"50%",border:"1px solid rgba(92,242,154,.2)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",boxShadow:"0 0 60px rgba(92,242,154,.08),inset 0 0 60px rgba(92,242,154,.04)"}}>
            <div style={{position:"absolute",inset:0,borderRadius:"50%",background:"radial-gradient(circle at 35% 35%,rgba(92,242,154,.12),transparent 60%)"}}/>
            <div style={{position:"absolute",inset:16,borderRadius:"50%",border:"1px dashed rgba(92,242,154,.1)"}}/>
            <div style={{textAlign:"center",position:"relative"}}>
              <div style={{fontSize:"3rem",marginBottom:8}}>🌏</div>
              <div style={{fontFamily:"var(--font-m)",fontSize:".65rem",color:"rgba(200,220,240,.5)"}}>Chennai, India</div>
            </div>
          </div>
          {[{top:"10%",left:"10%",c:"#5CF29A"},{top:"20%",right:"8%",c:"#9D7BFF"},{bottom:"20%",left:"5%",c:"#4DEEEA"},{bottom:"10%",right:"15%",c:"#FFB454"}].map((pos,i)=>(
            <div key={i} style={{position:"absolute",...pos,width:8,height:8,borderRadius:"50%",background:pos.c,boxShadow:`0 0 12px ${pos.c}`,animation:`blink ${1.5+i*0.4}s ease-in-out infinite`}}/>
          ))}
        </div>
      </div>

      <div className="pw">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"start"}} className="two-col">

          {/* Contact links */}
          <div>
            <div className="sl">Reach Out</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {links.map(l=>(
                <a key={l.name} href={l.href} target={l.href.startsWith("mailto")?"_self":"_blank"} rel="noreferrer" className="clc" style={{"--cl":l.c}}>
                  <div className="clc-icon" style={{borderColor:`${l.c}30`,background:`${l.c}0d`}}>{l.icon}</div>
                  <div className="clc-info">
                    <div className="clc-name">{l.name}</div>
                    <div className="clc-val">{l.val}</div>
                  </div>
                  <div className="clc-arrow">↗</div>
                </a>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div>
            <div className="sl">Quick Info</div>
            <div className="gc" style={{padding:"28px",marginBottom:20}}>
              <div className="ht">
                {[
                  {k:"Location",     v:"Chennai, Tamil Nadu, India"},
                  {k:"College",      v:"Sri Sairam Engineering College"},
                  {k:"Program",      v:"B.E. CSE — Final Year"},
                  {k:"Status",       v:"Actively seeking SDE roles"},
                  {k:"Availability", v:"June 2026 onwards"},
                  {k:"Response",     v:"Usually within 24 hours"},
                ].map(r=>(
                  <div className="ht-row" key={r.k}>
                    <span className="ht-k">{r.k}</span>
                    <span className="ht-v">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{padding:"22px 24px",background:"rgba(92,242,154,.05)",border:"1px solid rgba(92,242,154,.15)",borderRadius:16}}>
              <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:"1rem",color:"#5CF29A",marginBottom:12}}>
                Open to opportunities in
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                {["SDE Full-Time","Software Internship","Full-Stack Roles","Java Backend","React Frontend","Data Analysis"].map(r=>(
                  <span key={r} style={{fontFamily:"var(--font-m)",fontSize:".68rem",padding:"5px 12px",borderRadius:20,border:"1px solid rgba(92,242,154,.2)",color:"rgba(200,240,220,.7)",background:"rgba(92,242,154,.04)"}}>{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
