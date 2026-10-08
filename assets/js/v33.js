(()=>{'use strict';
 const dialog=document.getElementById('v33-cert-dialog');if(!dialog)return;
 const photo=dialog.querySelector('img'),heading=dialog.querySelector('[data-v33-title]');let previous=null;
 document.querySelectorAll('[data-certificate-preview]').forEach(button=>{button.addEventListener('click',()=>{previous=button;photo.src=button.getAttribute('data-certificate-preview');photo.alt='Certificate preview: '+button.getAttribute('data-title');heading.textContent=button.getAttribute('data-title');if(typeof dialog.showModal==='function'){dialog.showModal();}else{window.open(photo.src,'_blank','noopener')}})});
 dialog.querySelector('[data-close]')?.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('close',()=>{photo.removeAttribute('src');previous?.focus()});
})();
