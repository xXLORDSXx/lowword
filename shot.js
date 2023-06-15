var elementoBoton = document.getElementById("boton")
elementoBoton.addEventListener("click", cambiarImagen)

var elementoImagen = document.getElementById("imagen-bob-esponja")

function cambiarImagen()
{
  if(elementoBoton.classList.contains("paso-1"))
  {
    elementoBoton.classList.remove("paso-1")
    elementoBoton.classList.add("paso-2")
    elementoImagen.src = "https://th.bing.com/th/id/OIP.cc-kBzZvxMy2UnHrSam_5gHaIq?pid=ImgDet&rs=1"
  }
  else if(elementoBoton.classList.contains("paso-2"))
  {
    elementoBoton.classList.remove("paso-2")
    elementoBoton.classList.add("paso-1")
    elementoImagen.src = "https://th.bing.com/th/id/R.61f43991e48f43e58558f33825d7563f?rik=0xuun7TRcxstew&riu=http%3a%2f%2f3.bp.blogspot.com%2f-XPgTnWmExyc%2fU3moK4-0EaI%2fAAAAAAAAfls%2fwH-OtwA4hus%2fs1600%2f09.png&ehk=TWs%2b7iSOpycnsORmbuJg2qNyVc8Gg08oBsQhosTnPw0%3d&risl=&pid=ImgRaw&r=0"
  }
}
