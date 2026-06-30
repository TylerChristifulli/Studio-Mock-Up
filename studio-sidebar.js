/* Adds the persistent FOAMfrat Studio left sidebar to the standalone profile/admin
   pages so they match the rest of the app (same nav, same width). The appbar
   hamburger (#navToggle) collapses/expands it. Include instead of studio-nav.js. */
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
    {sep:true,label:'Tools'},
    {id:'pipeline',label:'Content Pipeline',icon:'account_tree',href:'studio-soon.html?t=Content%20Pipeline'},
    {id:'scribe',label:'Scribe',            icon:'edit_note',   href:'studio-soon.html?t=Scribe'},
    {id:'codex', label:'Codex',             icon:'menu_book',   href:'studio-soon.html?t=Codex'}
  ];
  const here=(location.pathname.split('/').pop()||'').toLowerCase();
  const css=`
  .appbar{position:sticky;top:0;z-index:50;}
  .appbar .bar-inner{max-width:none !important;}
  #studioSb{position:fixed;left:0;background:#000;border-right:1px solid rgba(255,255,255,.08);
    padding:14px 12px 40px;overflow-y:auto;z-index:40;transition:width .2s;}
  #studioSb a{display:flex;align-items:center;gap:14px;padding:11px 12px;border-radius:10px;
    color:rgba(255,255,255,.62);font-size:14px;text-decoration:none;white-space:nowrap;overflow:hidden;}
  #studioSb a:hover{background:#1c1f23;color:#fff;}
  #studioSb a.active{background:rgba(102,187,106,.14);color:#66bb6a;}
  #studioSb a .material-icons{font-size:21px;flex-shrink:0;}
  #studioSb .sep{height:1px;background:rgba(255,255,255,.08);margin:10px 8px;}
  #studioSb .lbl{font-size:10.5px;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.4);padding:6px 14px 4px;}
  #studioSb.collapsed{width:64px;}
  #studioSb.collapsed a span:not(.material-icons),#studioSb.collapsed .lbl{display:none;}
  .wrap{margin-left:230px !important;max-width:none !important;transition:margin-left .2s;}
  body.sbcol .wrap{margin-left:64px !important;}
  @media(max-width:840px){
    .wrap{margin-left:64px !important;}
    #studioSb{width:64px;}
    #studioSb a span:not(.material-icons),#studioSb .lbl{display:none;}
  }`;
  const st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  const items=NAV.map(n=>{
    if(n.sep) return `<div class="sep"></div><div class="lbl">${n.label}</div>`;
    const active=(n.href.split('?')[0].toLowerCase()===here)?' active':'';
    return `<a class="${active.trim()}" href="${n.href}"><span class="material-icons">${n.icon}</span><span>${n.label}</span></a>`;
  }).join('');
  const sb=document.createElement('nav'); sb.id='studioSb'; sb.innerHTML=items; document.body.appendChild(sb);

  function place(){
    const h=(document.querySelector('.appbar')||{}).offsetHeight||64;
    sb.style.top=h+'px'; sb.style.height='calc(100vh - '+h+'px)';
  }
  place(); window.addEventListener('resize',place);

  const t=document.getElementById('navToggle');
  if(t){ t.style.cursor='pointer'; t.addEventListener('click',function(){
    sb.classList.toggle('collapsed'); document.body.classList.toggle('sbcol');
  }); }
})();
