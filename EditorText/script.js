Write.document.designMode = "On"
        var button = document.querySelectorAll('button')
        for(let i =0 ; i < button.length ; i++){
        button[i].addEventListener('click', ()=>{
            
            let cmd = button[i].getAttribute('data-cmd')
        if(cmd == 'TamFonte'){
            var TamFonte = document.getElementById('TamFonte');

            TamFonte.addEventListener('click', () =>{
               let TFonte = prompt('Tamanho da fonte aqui: (de 1 a 7)')
               Write.document.execCommand('fontSize', false, TFonte)
            })
        }if(cmd == 'Fonte'){

            
           document.getElementById('Fonte').addEventListener('click', () =>{
               let Fonte = prompt('Escolha uma fonte aqui:')
               Write.document.execCommand('fontName', false, Fonte)
            })
        }

        if(cmd == 'CreateLink'){

           document.getElementById('InsertLink').addEventListener('click', () =>{
               let url = prompt('Coloque um link aqui:')
               Write.document.execCommand(cmd, false, url)

               let links = Write.document.querySelectorAll('a')
               links.forEach(item => {  
                   item.target = '_blank'
                item.addEventListener('mouseover', ()=>{
                    Write.document.designMode = 'Off'
                })
                item.addEventListener('mouseout', ()=>{
                    Write.document.designMode = 'On'
                })
               });
            })
        }
        else{
            Write.document.execCommand( cmd, false, null)
        }
            
        })

        }