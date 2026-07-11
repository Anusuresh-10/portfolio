import { skillTree, techStack } from "../data/portfolio";
import "./pages.css";

const catCfg = {
  "Languages":        { s1:"#4DEEEA",s2:"#4D9FFF",bg:"rgba(77,238,234,.05)",  border:"rgba(77,238,234,.15)"  },
  "Web & Full-Stack": { s1:"#9D7BFF",s2:"#FF6B9D",bg:"rgba(157,123,255,.05)", border:"rgba(157,123,255,.15)" },
  "DSA & Algorithms": { s1:"#FFB454",s2:"#FF6B9D",bg:"rgba(255,180,84,.05)",  border:"rgba(255,180,84,.15)"  },
  "Tools & Cloud":    { s1:"#5CF29A",s2:"#4DEEEA",bg:"rgba(92,242,154,.05)",  border:"rgba(92,242,154,.15)"  },
};

const focusItems = [
  {icon:"🧠",t:"DSA in Java",s:"Arrays · Trees · Graphs · DP",c:"#FFB454",bg:"rgba(255,180,84,.05)"},
  {icon:"🌐",t:"Full-Stack",s:"React + Node.js + MongoDB",c:"#9D7BFF",bg:"rgba(157,123,255,.05)"},
  {icon:"🎯",t:"Placement Prep",s:"Aptitude + Coding rounds",c:"#4DEEEA",bg:"rgba(77,238,234,.05)"},
  {icon:"☁️",t:"Cloud & IoT",s:"NPTEL Elite · IIT Kharagpur",c:"#5CF29A",bg:"rgba(92,242,154,.05)"},
];

export default function SkillsPage({ onBack }) {
  return (
    <div className="ps" style={{"--font-m":"'JetBrains Mono',monospace","--ac":"#4DEEEA"}}>
      <div className="ps-bg"/><div className="ps-scan"/>
      <div className="bb">
        <button className="bb-back" onClick={onBack}>← Back to World</button>
        <div className="bb-right"><span className="bb-tag">skill_tree.json</span></div>
      </div>

      <div className="ph ph-2col">
        <div>
          <div className="ph-eyebrow">What I Build With</div>
          <h1>Skill <span className="gt-c">Arsenal</span></h1>
          <p className="ph-sub">A live map of languages, frameworks, and tools — updated as I learn and ship.</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {["Currently learning via Apna College","DSA in Java · Web Dev · Aptitude","4 NPTEL Elite Certifications (IIT)","CGPA 8.49 · Final Year CSE"].map((item,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 18px",background:"rgba(77,238,234,.04)",border:"1px solid rgba(77,238,234,.1)",borderRadius:12}}>
              <span style={{color:"#4DEEEA",fontSize:".8rem",flexShrink:0}}>✦</span>
              <span style={{fontFamily:"var(--font-m)",fontSize:".74rem",color:"rgba(200,220,240,.6)"}}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pw">
        {/* Skill bars */}
        <div className="sec">
          <div className="sl">Proficiency Map</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}} className="two-col">
            {skillTree.map(group=>{
              const c=catCfg[group.category]||{s1:"#4DEEEA",s2:"#9D7BFF",bg:"rgba(77,238,234,.04)",border:"rgba(77,238,234,.1)"};
              return (
                <div key={group.category} className="sk-cat" style={{background:c.bg,borderColor:c.border}}>
                  <div className="sk-hd">
                    <div className="sk-icon">{group.icon}</div>
                    <div className="sk-name">{group.category}</div>
                  </div>
                  {group.skills.map(s=>(
                    <div className="sk-row" key={s.name}>
                      <div className="sk-lbl">
                        <span>{s.name}</span>
                        <span className="sk-pct" style={{color:c.s1}}>{s.level}%</span>
                      </div>
                      <div className="sk-track">
                        <div className="sk-fill" style={{width:`${s.level}%`,background:`linear-gradient(90deg,${c.s1},${c.s2})`}}/>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech pills */}
        <div className="sec">
          <div className="sl">Full Technology Stack</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
            {techStack.map(t=>(
              <div className="tp" key={t.name}>
                <span style={{fontSize:"1.15rem"}}>{t.icon}</span>
                <span>{t.name}</span>
                <span style={{width:7,height:7,borderRadius:"50%",background:t.color,boxShadow:`0 0 6px ${t.color}`,flexShrink:0}}/>
              </div>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div className="sec">
          <div className="sl">Current Focus</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}} className="cert-g4">
            {focusItems.map(f=>(
              <div key={f.t} style={{background:f.bg,border:`1px solid ${f.c}30`,borderRadius:18,padding:24,display:"flex",alignItems:"flex-start",gap:14,transition:"all .25s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=`${f.c}60`;e.currentTarget.style.transform="translateY(-4px)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=`${f.c}30`;e.currentTarget.style.transform="none";}}>
                <span style={{fontSize:"1.8rem",flexShrink:0}}>{f.icon}</span>
                <div>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:600,fontSize:".9rem",color:f.c,marginBottom:6}}>{f.t}</div>
                  <div style={{fontFamily:"var(--font-m)",fontSize:".68rem",color:"rgba(200,220,240,.45)",lineHeight:1.6}}>{f.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code snippet decoration */}
        <div className="sec">
          <div className="sl">Code I Write Daily</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}} className="two-col">
            {[
              {lang:"Java",color:"#f89820",code:`// DSA practice
public int maxSubArray(int[] nums) {
    int max = nums[0], cur = nums[0];
    for (int i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], cur + nums[i]);
        max = Math.max(max, cur);
    }
    return max; // Kadane's Algorithm
}`},
              {lang:"JavaScript",color:"#F7DF1E",code:`// React component
const SkillCard = ({ name, level, color }) => {
  return (
    <div className="skill-card">
      <span>{name}</span>
      <div className="bar">
        <div style={{ width: level + '%',
          background: color }} />
      </div>
    </div>
  );
};`}
            ].map(({lang,color,code})=>(
              <div key={lang} className="gc" style={{overflow:"hidden"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderBottom:"1px solid rgba(255,255,255,.06)",background:"rgba(0,0,0,.2)"}}>
                  <span style={{width:10,height:10,borderRadius:"50%",background:"#FF5F57"}}/>
                  <span style={{width:10,height:10,borderRadius:"50%",background:"#FEBC2E"}}/>
                  <span style={{width:10,height:10,borderRadius:"50%",background:"#28C840"}}/>
                  <span style={{fontFamily:"var(--font-m)",fontSize:".65rem",color:"rgba(200,220,240,.4)",marginLeft:8}}>{lang}</span>
                </div>
                <pre style={{fontFamily:"var(--font-m)",fontSize:".72rem",color:"rgba(200,220,240,.65)",padding:"16px 18px",margin:0,overflow:"auto",lineHeight:1.7,background:"rgba(0,0,0,.15)"}}>{code}</pre>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
