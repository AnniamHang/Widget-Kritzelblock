(function(){
  const KEY = 'kritzel_note_v1';
  function el(id){return document.getElementById(id)}

  const area = el('noteArea');
  const status = el('status');
  const clearBtn = el('clearBtn');
  const exportBtn = el('exportBtn');

  function load(){
    try{
      const v = localStorage.getItem(KEY) || '';
      if(area) area.value = v;
      showStatus('Geladen');
    }catch(e){console.error(e);} 
  }

  let timer;
  function save(){
    try{
      localStorage.setItem(KEY, area.value);
      showStatus('Gespeichert');
    }catch(e){console.error(e);showStatus('Fehler beim Speichern')}
  }

  function debounceSave(){
    showStatus('Speichern...');
    clearTimeout(timer);
    timer = setTimeout(save,700);
  }

  function showStatus(text){
    if(!status) return;
    status.textContent = text;
    status.style.opacity = 1;
    clearTimeout(status._t);
    status._t = setTimeout(()=>{status.style.opacity = 0.6},1200);
  }

  if(area){
    area.addEventListener('input', debounceSave);
  }

  if(clearBtn){
    clearBtn.addEventListener('click', ()=>{
      if(!confirm('Alle Notizen löschen?')) return;
      if(area){area.value='';save();}
    });
  }

  if(exportBtn){
    exportBtn.addEventListener('click', ()=>{
      try{
        const text = area.value || '';
        navigator.clipboard.writeText(text).then(()=>{
          showStatus('In Zwischenablage kopiert');
        }).catch(()=>{
          showStatus('Kopieren fehlgeschlagen');
        });
      }catch(e){console.error(e);showStatus('Fehler')}
    });
  }

  // Lade beim Start
  load();
})();
