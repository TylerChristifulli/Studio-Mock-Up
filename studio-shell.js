/* Injects the shared FOAMfrat Studio appbar + sidebar around page content.
   Usage in a page:
     <template id="main"> ...page content (a .page div)... </template>
     <script>STUDIO_PAGE='home';</script>
     <script src="studio-shell.js"></script>
*/
(function(){
  const NAV=[
    {id:'home',  label:'Self-Paced',       icon:'play_circle',  href:'studio-home.html'},
    {id:'learning',label:'Learning',       icon:'school',       href:'studio-learning.html'},
    {id:'continue',label:'Continue Watching',icon:'history',    href:'studio-learning.html'},
    {id:'assignments',label:'Assignments', icon:'assignment',   href:'studio-assignments.html'},
    {id:'live',  label:'Live Classes',     icon:'videocam',     href:'studio-live.html'},
    {id:'events',label:'Events',           icon:'event',        href:'studio-events.html'},
    {id:'progress',label:'Progress',       icon:'trending_up',  href:'ibsc-learning-paths.html'},
    {sep:true,label:'Admin'},
    {id:'admin', label:'Admin',            icon:'admin_panel_settings',href:'studio-admin.html'},
    {id:'manage',label:'Manage',           icon:'tune',         href:'studio-manage.html'},
    {id:'create',label:'Create',           icon:'add_circle',   href:'studio-create.html'},
    {id:'pipeline',label:'Content Pipeline',icon:'account_tree',href:'studio-soon.html?t=Content%20Pipeline'},
    {id:'scribe',label:'Scribe',           icon:'edit_note',    href:'studio-soon.html?t=Scribe'},
    {id:'codex', label:'Codex',            icon:'menu_book',    href:'studio-soon.html?t=Codex'}
  ];
  const page=window.STUDIO_PAGE||'';
  const tpl=document.getElementById('main');
  const mainHTML=tpl?tpl.innerHTML:'';

  const appbar=`
  <header class="appbar">
    <div class="left">
      <span class="material-icons" id="menuToggle">menu</span>
      <a href="studio-home.html" class="logo"><span class="material-icons">hexagon</span></a>
    </div>
    <div class="right">
      <span class="material-icons">search</span>
      <span class="material-icons">notifications</span>
      <span class="material-icons">explore</span>
      <a href="certificates.html" class="user">Tyler Christifulli <span class="material-icons">expand_more</span></a>
    </div>
  </header>`;

  const items=NAV.map(n=>{
    if(n.sep) return `<div class="navsep"></div><div class="navlabel">${n.label}</div>`;
    const active=n.id===page?' active':'';
    return `<a class="navitem${active}" href="${n.href}"><span class="material-icons">${n.icon}</span><span>${n.label}</span></a>`;
  }).join('');
  const sidebar=`<nav class="sidebar" id="sidebar">${items}</nav>`;

  document.body.innerHTML = appbar + `<div class="shell">${sidebar}<main class="content">${mainHTML}</main></div>`;

  const t=document.getElementById('menuToggle');
  if(t) t.addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('collapsed'));
})();
