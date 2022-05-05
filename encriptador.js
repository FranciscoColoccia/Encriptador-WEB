                let entrada = document.querySelector("#encriptador");
                let salida = document.querySelector("#desencriptador");

                let btnEncriptar = document.getElementById("botonEncrip");
                let btnDesencriptar = document.getElementById("botonDescrip");
                let btnCopiarTexto = document.getElementById("botonCopiar")
                entrada.focus()
        
                btnEncriptar.addEventListener("click",function(e){
                    e.preventDefault();
                    let texto = encriptarTexto();
                    salida.value = texto;
                   
                 })


                btnDesencriptar.addEventListener("click", function(){                   
                    let texto = desencriptarTexto();
                    salida.value = texto;
                    
                })
            
                 

                btnCopiarTexto.addEventListener("click",function(){
                    
                    copiarTexto();
                    salida.value = "";
                    entrada.value="";
                    alert("mensaje copiado")
                    
                })


            function encriptarTexto(){
                    let textoEncriptar = limpiarTexto(entrada.value);
                    let textoEncriptado = entrada.value;
                  

                    textoEncriptado = textoEncriptar.replaceAll("e", "enter")
                        .replaceAll("i", "imes")
                        .replaceAll("a", "ai")
                        .replaceAll("o", "ober")
                        .replaceAll("u", "ufat")

                    return textoEncriptado;
                    }

            function desencriptarTexto(){
                    let textoEncriptar = limpiarTexto(entrada.value);
                    let textoDesencriptado = entrada.value;

                    textoDesencriptado = textoEncriptar.replaceAll("enter", "e")
                        .replaceAll("imes","i")
                        .replaceAll( "ai","a")
                        .replaceAll( "ober","o")
                        .replaceAll("ufat","u" )
                    
                    return textoDesencriptado
                    }          


            function limpiarTexto(texto){
            return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
            }

            function copiarTexto(){
                salida.focus();
                document.execCommand("selectAll")
                document.execCommand("copy");
            }

         