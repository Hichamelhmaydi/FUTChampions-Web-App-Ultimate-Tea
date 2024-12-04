document.addEventListener('DOMContentLoaded', () => {
    let counPlay = document.querySelector('.coun-play');
    let red;
    
    let close = document.querySelector('#close');
    close.addEventListener("click", (e) => {
        e.preventDefault();
        counPlay.style.display = 'none';
    }) ;

    let closer=document.getElementById('closer');
    closer.addEventListener('click',function(e){
        e.preventDefault();
        let Formulaire=document.getElementById('Formulaire');
        Formulaire.style.display='none';
        
    });

    let ID=0;
    let IDE=0;
    let cardplay=document.getElementsByClassName('card-player');
    
    let ajouerCb1 = document.querySelector('#ajouter-cb-un');
    let ajouerCb2 =document.querySelector('#ajouter-cb-deux');
    
    const  ajouterR=document.querySelector('#ajouter-rb');
    let  ajouterL=document.querySelector('#ajouter-lb');
   

    let ajouteGk = document.getElementById('ajouter-gk');
   

    let ajouerCm1 = document.querySelector('#ajouter-cm-un');
    let ajouerCm2 = document.querySelector('#ajouter-cm-deux');
    let ajouerCm3 = document.querySelector('#ajouter-cm-trois');

    let ajouterLf=document.querySelector('#ajouter-lf');
    const  ajouteSt=document.querySelector('#ajouter-st');
    const  ajouterRf=document.querySelector('#ajouter-rf');

    let ajoute = document.getElementById('boutton-ajoutee');
    let infoForm = document.querySelector('form');

    const subinfo=document.querySelector('#subinfo');


   let counChangment= document.querySelector('.changment')

ajoute.addEventListener('click', () => {
    infoForm.style.display = 'block';  
});


    fetch("/js/data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let arr = data.players; 
        console.log(arr);





    ajouterL.addEventListener("click", () => {
            counPlay.innerHTML="";
           
            counPlay.append(close);
            counPlay.style.display = 'block';  
                arr.forEach(element => {
                    if(element.position==="LB"){
                        ID++;
                        IDE++;
                        const htmlContent = `
                        <div class="card-player" id="${ID}">
                        <img src="${element.photo}" alt="joueur photo">
                         <div class="post-total">
                         <span id="total-player">${element.rating}</span><br>
                         <span id="position">${element.position}</span>
                         </div>
                         <div class="flag-club">
                         <span class="flag">
                         <img src="${element.flag}" alt="${element.nationality}">
                         </span>
                         <span class="club">
                         <img src="${element.logo}" alt="${element.club}">
                         </span>
                       </div>
                       <div class="statistiques">
                        <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                        <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                        <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                        <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                        <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                        <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                       </div>
                       <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                        <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                    </div>
                     `
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer () ;
                        ajoutePlayerLb ();
                    }
                  
                });
 
            })
    ajouterLf.addEventListener("click", () => {
                counPlay.innerHTML="";
                counPlay.append(close);
                counPlay.style.display = 'block';    
                    arr.forEach(element => {
                        
                        if(element.position==="LW"){
                            ID++;
                            const htmlContent = `
                             <div class="card-player" id="${ID}">
                            <div class="card-player">
                           <img src="${element.photo}" alt="joueur photo">
                           <div class="post-total">
                             <span id="total-player">${element.rating}</span><br>
                             <span id="position">${element.position}</span>
                           </div>
                           <div class="flag-club">
                             <span class="flag">
                                 <img src="${element.flag}" alt="${element.nationality}">
                             </span>
                             <span class="club">
                                 <img src="${element.logo}" alt="${element.club}">
                             </span>
                           </div>
                           <div class="statistiques">
                                 <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                 <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                 <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                 <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                 <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                 <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                           </div>
                            </div>
                              <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                              <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                         `;
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                            deletPlayer ();
                            ajoutePlayerLw ();
                            
                        }
                    });
            })
    ajouterRf.addEventListener("click", () => {
                    counPlay.innerHTML="";
                    counPlay.append(close);
                    counPlay.style.display = 'block';    
                        arr.forEach(element => {
                            
                            if(element.position==="RW"){
                                ID++;
                                const htmlContent = `
                                 <div class="card-player" id="${ID}">
                                <div class="card-player">
                               <img src="${element.photo}" alt="joueur photo">
                               <div class="post-total">
                                 <span id="total-player">${element.rating}</span><br>
                                 <span id="position">${element.position}</span>
                               </div>
                               <div class="flag-club">
                                 <span class="flag">
                                     <img src="${element.flag}" alt="${element.nationality}">
                                 </span>
                                 <span class="club">
                                     <img src="${element.logo}" alt="${element.club}">
                                 </span>
                               </div>
                               <div class="statistiques">
                                     <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                     <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                     <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                     <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                     <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                     <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                               </div>
                            </div>
                            <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                             <button style="background:red" class="add" id="${IDE}">Ajouter</button>

                             `;
                                counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                deletPlayer ();
                                ajoutePlayerRw();
                            }
                        });
            })
    ajouteSt.addEventListener("click", () => {
                        counPlay.innerHTML="";
                        counPlay.append(close);
                        counPlay.style.display = 'block';    
                            arr.forEach(element => {
                                
                                if(element.position==="ST"){
                                    ID++;
                                    const htmlContent = `
                                     <div class="card-player" id="${ID}">
                                    <div class="card-player">
                                   <img src="${element.photo}" alt="joueur photo">
                                   <div class="post-total">
                                     <span id="total-player">${element.rating}</span><br>
                                     <span id="position">${element.position}</span>
                                   </div>
                                   <div class="flag-club">
                                     <span class="flag">
                                         <img src="${element.flag}" alt="${element.nationality}">
                                     </span>
                                     <span class="club">
                                         <img src="${element.logo}" alt="${element.club}">
                                     </span>
                                   </div>
                                   <div class="statistiques">
                                         <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                         <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                         <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                         <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                         <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                         <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                                   </div>
                                </div>
                                <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                                <button style="background:red" class="add" id="${IDE}">Ajouter</button>                                 `;
                                    counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                    deletPlayer ();
                                    ajoutePlayerSt();
                                }
                            });
            })
    ajouterR.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.append(close);
            counPlay.style.display = 'block';    
                arr.forEach(element => {
                    
                    if(element.position==="RB"){
                        ID++;
                        const htmlContent = `
                         <div class="card-player" id="${ID}">
                        <div class="card-player">
                       <img src="${element.photo}" alt="joueur photo">
                       <div class="post-total">
                         <span id="total-player">${element.rating}</span><br>
                         <span id="position">${element.position}</span>
                       </div>
                       <div class="flag-club">
                         <span class="flag">
                             <img src="${element.flag}" alt="${element.nationality}">
                         </span>
                         <span class="club">
                             <img src="${element.logo}" alt="${element.club}">
                         </span>
                       </div>
                       <div class="statistiques">
                             <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                             <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                             <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                             <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                             <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                             <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                       </div>
                    </div>
                    <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                    <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                     `;
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer ()
                        ajoutePlayerRb()
                    }
                });
            })   

    ajouerCm1.addEventListener('click', () => {
            counPlay.style.display = 'block';
            counPlay.innerHTML="";
            counPlay.append(close);
                arr.forEach(element => {
                    if(element.position==="CM"){
                        ID++;
                        const htmlContent = `
                         <div class="card-player" id="${ID}">
                        <div class="card-player">
                       <img src="${element.photo}" alt="joueur photo">
                       <div class="post-total">
                         <span id="total-player">${element.rating}</span><br>
                         <span id="position">${element.position}</span>
                       </div>
                       <div class="flag-club">
                         <span class="flag">
                             <img src="${element.flag}" alt="${element.nationality}">
                         </span>
                         <span class="club">
                             <img src="${element.logo}" alt="${element.club}">
                         </span>
                       </div>
                       <div class="statistiques">
                             <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                             <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                             <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                             <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                             <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                             <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                       </div>
                    </div>
                    <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                    <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                     `;
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer ();
                        ajoutePlayerCm1();                        
                    }
                });
            })
    ajouerCm2.addEventListener('click', () => {
                counPlay.style.display = 'block';
                counPlay.innerHTML="";
                counPlay.append(close);
                    arr.forEach(element => {
                        if(element.position==="CM"){
                            ID++;
                            const htmlContent = `
                             <div class="card-player" id="${ID}">
                            <div class="card-player">
                           <img src="${element.photo}" alt="joueur photo">
                           <div class="post-total">
                             <span id="total-player">${element.rating}</span><br>
                             <span id="position">${element.position}</span>
                           </div>
                           <div class="flag-club">
                             <span class="flag">
                                 <img src="${element.flag}" alt="${element.nationality}">
                             </span>
                             <span class="club">
                                 <img src="${element.logo}" alt="${element.club}">
                             </span>
                           </div>
                           <div class="statistiques">
                                 <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                 <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                 <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                 <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                 <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                 <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                           </div>
                        </div>
                        <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                        <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                         `;
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                            deletPlayer ();
                            ajoutePlayerCm2();
                        }
                    });
            })
    ajouerCm3.addEventListener('click', () => {
                    counPlay.style.display = 'block';
                    counPlay.innerHTML="";
                    counPlay.append(close);
                        arr.forEach(element => {
                            if(element.position==="CM"){
                                ID++;
                                const htmlContent = `
                                 <div class="card-player" id="${ID}">
                                <div class="card-player">
                               <img src="${element.photo}" alt="joueur photo">
                               <div class="post-total">
                                 <span id="total-player">${element.rating}</span><br>
                                 <span id="position">${element.position}</span>
                               </div>
                               <div class="flag-club">
                                 <span class="flag">
                                     <img src="${element.flag}" alt="${element.nationality}">
                                 </span>
                                 <span class="club">
                                     <img src="${element.logo}" alt="${element.club}">
                                 </span>
                               </div>
                               <div class="statistiques">
                                     <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                     <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                     <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                     <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                     <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                     <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                               </div>
                            </div>
                            <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                            <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                             `;
                                counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                deletPlayer ();
                                ajoutePlayerCm3();
                            }
                        });
            })
  
    ajouerCb1.addEventListener('click', () => {
                counPlay.style.display = 'block';
                counPlay.innerHTML="";
                counPlay.append(close);

                    arr.forEach(element => {
                        if(element.name==="Antonio Rudiger"){
                            ID++;
                            const htmlContent = `
                            <div class="card-player" id="${ID}">
                            <div class="card-player">
                           <img src="${element.photo}" alt="joueur photo">
                           <div class="post-total">
                             <span id="total-player">${element.rating}</span><br>
                             <span id="position">${element.position}</span>
                           </div>
                           <div class="flag-club">
                             <span class="flag">
                                 <img src="${element.flag}" alt="${element.nationality}">
                             </span>
                             <span class="club">
                                 <img src="${element.logo}" alt="${element.club}">
                             </span>
                           </div>
                           <div class="statistiques">
                                 <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                 <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                 <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                 <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                 <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                 <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                           </div>
                        </div>
                           <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                           <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                         `;
                            counPlay.insertAdjacentHTML('beforeend', htmlContent);
                            deletPlayer ();
                            ajoutePlayerCb1 ();
                        }
                    });


            
                    
                    
               

            })
    ajouerCb2.addEventListener('click', () => {
                    counPlay.style.display = 'block';
                    counPlay.innerHTML="";
                    counPlay.append(close);
                        arr.forEach(element => {
                            if(element.name==="Virgil van Dijk"){
                                ID++;
                                const htmlContent = `
                                <div class="card-player" id="${ID}">
                                <div class="card-player">
                               <img src="${element.photo}" alt="joueur photo">
                               <div class="post-total">
                                 <span id="total-player">${element.rating}</span><br>
                                 <span id="position">${element.position}</span>
                               </div>
                               <div class="flag-club">
                                 <span class="flag">
                                     <img src="${element.flag}" alt="${element.nationality}">
                                 </span>
                                 <span class="club">
                                     <img src="${element.logo}" alt="${element.club}">
                                 </span>
                               </div>
                               <div class="statistiques">
                                     <span class="statistique-un">rythme<span class="rythme">${element.pace}</span></span>
                                     <span class="statistique-deux">tir <span class="tir">${element.shooting}</span></span>
                                     <span class="statistique-trois">passe <span class="passe">${element.passing}</span></span><br>
                                     <span class="statistique-quatre">dribble<span class="dribble">${element.dribbling}</span></span>
                                     <span class="statistique-cinq">defense <span class="defense">${element.defending}</span></span><br>
                                     <span class="statistique-six">physique<span class="physique">${element.physical}</span></span>
                               </div>
                            </div>
                               <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                               <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                             `;
                                counPlay.insertAdjacentHTML('beforeend', htmlContent);
                                deletPlayer ();
                                ajoutePlayerCb2 ();
                            }
                        });
                   
    
            })    
    ajouteGk.addEventListener("click", () => {
            counPlay.innerHTML="";
            counPlay.append(close);
            counPlay.style.display = 'block';    
                arr.forEach(element => {
                    
                    if(element.position==="GK"){
                        ID++;
                        const htmlContent = `
                        <div class="card-player" id="${ID}">
                        <div class="card-player">
                           <img src="${element.photo}" alt="joueur photo">
                           <div class="post-total">
                             <span id="total-player">${element.rating}</span><br>
                             <span id="position">${element.position}</span>
                           </div>
                           <div class="flag-club">
                             <span class="flag">
                                 <img src="${element.flag}" alt="${element.nationality}">
                             </span>
                             <span class="club">
                                 <img src="${element.logo}" alt="${element.club}">
                             </span>
                           </div>
                           <div class="statistiques">
                                 <span class="statistique-un">rating<span class="rythme">${element.rating}</span></span>
                                 <span class="statistique-deux">diving <span class="tir">${element.diving}</span></span><br>
                                 <span class="statistique-trois">handling <span class="passe">${element.handling}</span></span>
                                 <span class="statistique-quatre">kicking<span class="dribble">${element.kicking}</span></span><br>
                                 <span class="statistique-cinq">reflexes <span class="defense">${element.reflexes}</span></span>
                                 <span class="statistique-six">speed<span class="physique">${element.speed}</span></span>
                           </div>
                        </div>
                        <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                        <button style="background:red" class="add" id="${IDE}">Ajouter</button>
                     `;
                        counPlay.insertAdjacentHTML('beforeend', htmlContent);
                        deletPlayer ();
                        ajoutePlayerGk ();
                    }
                });
            })
        });



        function deletPlayer (){
            supp = document.querySelectorAll('.supp');
            supp.forEach(item=>{
                item.addEventListener('click',() => {
                    let cardPlayer = item.closest('.card-player');
                        cardPlayer.remove();
                });
            })

        }
        function ajoutePlayerLb() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                   
                    let cardPlayer = button.closest('.card-player');
        
                    let playerImage = cardPlayer.querySelector('img').src; 
                        ajouterL.innerHTML = `
                        <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                        `; 
                });
            });
        }  
        function ajoutePlayerRb() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouterR.innerHTML = `
                        <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                        `;  
                });
            });
        }
        function ajoutePlayerGk() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouteGk.innerHTML = `
                        <img src="${playerImage}" alt="Player" class="position-player" style="width: 60%; margin-left:20px; padding:0px">
                        `;  
                });
            });
        }
        function ajoutePlayerLw() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouterLf.innerHTML =`
                     <img src="${playerImage}" alt="Player" class="position-player" style="width:  27%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }
        function ajoutePlayerRw() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouterRf.innerHTML =`
                     <img src="${playerImage}" alt="Player" class="position-player" style="width:  27%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }
        function ajoutePlayerSt() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouteSt.innerHTML =`
                     <img src="${playerImage}" alt="Player" class="position-player" style="width: 27%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }
        function ajoutePlayerCb1() {
                    let addButtons = document.querySelectorAll('.add');
                    addButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            let cardPlayer = button.closest('.card-player');
                            let playerImage = cardPlayer.querySelector('img').src;
                            ajouerCb1.innerHTML =`
                            <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                            `; 
                        }); 
                    });
        }
         function ajoutePlayerCb2() {
                    let addButtons = document.querySelectorAll('.add');
                    addButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            let cardPlayer = button.closest('.card-player');
                            let playerImage = cardPlayer.querySelector('img').src;
                            ajouerCb2.innerHTML =`
                            <img src="${playerImage}" alt="Player" class="position-player" style="width: 20%; margin:0px; padding:0px">
                            `;  
                        }); 
                    });
        }    
        function ajoutePlayerCm1() {
            let addButtons = document.querySelectorAll('.add');
            addButtons.forEach(button => {
                button.addEventListener('click', () => {
                    let cardPlayer = button.closest('.card-player');
                    let playerImage = cardPlayer.querySelector('img').src;
                    ajouerCm1.innerHTML =`
                    <img src="${playerImage}" alt="Player" class="position-player" style="width: 28%; margin:0px; padding:0px">
                    `;  
                }); 
            });
        }            
        function ajoutePlayerCm2() {
    let addButtons = document.querySelectorAll('.add');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            let cardPlayer = button.closest('.card-player');
            let playerImage = cardPlayer.querySelector('img').src;
            ajouerCm2.innerHTML =`
            <img src="${playerImage}" alt="Player" class="position-player" style="width: 28%; margin:0px; padding:0px">
            `;  
        }); 
    });
        }            
        function ajoutePlayerCm3() {
    let addButtons = document.querySelectorAll('.add');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            let cardPlayer = button.closest('.card-player');
            let playerImage = cardPlayer.querySelector('img').src;
            ajouerCm3.innerHTML =`
            <img src="${playerImage}" alt="Player" class="position-player" style="width: 28%; margin:0px; padding:0px">
            `;  
        }); 
    });
        }            
        subinfo.addEventListener('click',function(event) {
            event.preventDefault();
            let notation_pl=document.getElementById('notation-pl').value;
            let rythme_pl=document.getElementById('rythme-pl').value;
            let tir_pl=document.getElementById('tir-pl').value;
            let passe_pl=document.getElementById('passe-pl').value;
            let dribble_pl=document.getElementById('dribble-pl').value;
            let defense_pl=document.getElementById('defense-pl').value;
            let physique_pl=document.getElementById('physique-pl').value;
            let position_pl = document.getElementById('position-pl').value;
            let photo_pl = document.getElementById('photo-pl').value;
            let nationality_pl = document.getElementById('nationality-pl').value;
            let club_pl = document.getElementById('club-pl').value;

            let card_play_chan=document.createElement('div');
            card_play_chan.innerHTML=`
             <div class="card-player" >
               <img src="${photo_pl}" style="width:6em;position:absolute;left:37px;">
               <div class="post-total">
                    <span id="total-player" style="width:6em;position:absolute;top:260px;left:45px;">${notation_pl}</span><br>
                    <span id="position"style="width:6em;position:absolute;top:280px;left:45px;">${position_pl}</span>
                </div>
                 <div class="flag-club">
                         <span class="flag">
                         <img src="${nationality_pl}" style="width:6em;position:absolute;top:270px;left:44px;width: 24px;height: 24px;">
                         </span>
                         <span class="club">
                         <img src="${club_pl}" style="width:6em;position:absolute;top:290px;left: 44px;width: 24px;height: 24px;">
                         </span>
                       </div>
               <div class="statistiques_pl">
                    <span class="statistique-un">rythme<span class="rythme"> ${rythme_pl}</span></span>
                    <span class="statistique-deux">tir <span class="tir"> ${tir_pl}</span></span>
                    <span class="statistique-trois">passe <span class="passe"> ${passe_pl}</span></span><br>
                    <span class="statistique-quatre">dribble<span class="dribble"> ${dribble_pl}</span></span>
                    <span class="statistique-cinq">defense <span class="defense"> ${defense_pl}</span></span><br>
                    <span class="statistique-six">physique<span class="physique"> ${physique_pl}</span></span>
                </div>
             </div>
                 <button style="background:red" class="supp" id="${IDE}">Suprimé</button>
                 <button style="background:red" class="add" id="${IDE}">Ajouter</button>
           `; 
           counChangment.appendChild(card_play_chan);
        });
           
    });
    

   












 