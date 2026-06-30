/* Slide-out navigation drawer opened by the appbar hamburger.
   Add to any page:
     <span class="material-icons" id="navToggle">menu</span>   (the hamburger)
     <script src="studio-nav.js"></script>
   Self-contained: injects its own styles + markup. */
(function(){
  const NAV=[
    {id:'home',  label:'Self-Paced',        icon:'play_circle', href:'studio-home.html'},
    {id:'learning',label:'Learning',        icon:'school',      href:'studio-learning.html'},
    {id:'continue',label:'Continue Watching',icon:'history',    href:'studio-learning.html'},
    {id:'assignments',label:'Assignments',  icon:'assignment',  href:'studio-assignments.html'},
    {id:'live',  label:'Live Classes',      icon:'videocam',    href:'studio-live.html'},
    {id:'events',label:'Events',            icon:'event',       href:'studio-events.html'},
    {id:'progress',label:'Progress',        icon:'trending_up', href:'ibsc-learning-paths.html'},
    {sep:true,label:'Admin'},
    {id:'admin', label:'Admin',             icon:'admin_panel_settings',href:'studio-admin.html'},
    {id:'manage',label:'Manage',            icon:'tune',        href:'studio-manage.html'},
    {id:'create',label:'Create',            icon:'add_circle',  href:'studio-create.html'},
    {id:'certs', label:'Certificates',      icon:'workspace_premium',href:'certificates.html'},
    {sep:true,label:'Tools'},
    {id:'pipeline',label:'Content Pipeline',icon:'account_tree',href:'studio-soon.html?t=Content%20Pipeline'},
    {id:'scribe',label:'Scribe',            icon:'edit_note',   href:'studio-soon.html?t=Scribe'},
    {id:'codex', label:'Codex',             icon:'menu_book',   href:'studio-soon.html?t=Codex'}
  ];
  const here=(location.pathname.split('/').pop()||'').toLowerCase();
  const css=`
  .snav-ov{position:fixed;inset:0;background:rgba(0,0,0,.55);opacity:0;visibility:hidden;transition:opacity .2s;z-index:300;}
  .snav-ov.open{opacity:1;visibility:visible;}
  .snav{position:fixed;top:0;left:0;bottom:0;width:264px;background:#0b0d10;border-right:1px solid rgba(255,255,255,.1);
    transform:translateX(-100%);transition:transform .22s ease;z-index:301;padding:14px 12px;overflow-y:auto;
    font-family:'Roboto',Helvetica,Arial,sans-serif;}
  .snav.open{transform:translateX(0);}
  .snav-top{display:flex;align-items:center;justify-content:space-between;padding:6px 8px 14px;}
  .snav-top .brand{display:flex;align-items:center;gap:10px;color:#fff;font-size:15px;font-weight:500;}
  .snav-top .logo{width:34px;height:34px;border-radius:50%;border:2px solid rgba(255,255,255,.5);display:flex;align-items:center;justify-content:center;}
  .snav-top .x{color:rgba(255,255,255,.55);cursor:pointer;}
  .snav a{display:flex;align-items:center;gap:14px;padding:11px 12px;border-radius:10px;color:rgba(255,255,255,.62);
    font-size:14px;text-decoration:none;cursor:pointer;}
  .snav a:hover{background:#1c1f23;color:#fff;}
  .snav a.active{background:rgba(102,187,106,.14);color:#66bb6a;}
  .snav a .material-icons{font-size:21px;}
  .snav .sep{height:1px;background:rgba(255,255,255,.08);margin:10px 8px;}
  .snav .lbl{font-size:10.5px;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.4);padding:6px 14px 4px;}
  `;
  const st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  const items=NAV.map(n=>{
    if(n.sep) return `<div class="sep"></div><div class="lbl">${n.label}</div>`;
    const active=(n.href.split('?')[0].toLowerCase()===here)?' active':'';
    return `<a class="${active.trim()}" href="${n.href}"><span class="material-icons">${n.icon}</span>${n.label}</a>`;
  }).join('');

  const wrap=document.createElement('div');
  wrap.innerHTML=`
    <div class="snav-ov" id="snavOv"></div>
    <nav class="snav" id="snav">
      <div class="snav-top">
        <span class="brand"><span class="logo"><span class="material-icons" style="font-size:18px">hexagon</span></span>Studio</span>
        <span class="material-icons x" id="snavClose">close</span>
      </div>
      ${items}
    </nav>`;
  document.body.appendChild(wrap);

  const ov=document.getElementById('snavOv'), nav=document.getElementById('snav');
  function open(){ov.classList.add('open');nav.classList.add('open');}
  function close(){ov.classList.remove('open');nav.classList.remove('open');}
  const t=document.getElementById('navToggle');
  if(t){t.style.cursor='pointer';t.addEventListener('click',open);}
  ov.addEventListener('click',close);
  document.getElementById('snavClose').addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
})();
