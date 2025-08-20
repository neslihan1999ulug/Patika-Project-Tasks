document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("task");       // HTML: id="task"
  const addToDoBtn = document.getElementById("liveToastBtn"); // HTML: id="liveToastBtn"
  const todoList = document.getElementById("list");        // HTML: id="list"

  // todos adında bir key tanımladım ve bu key içindeki verileri sayfa açıldığında parse metodu ile alıyorum çünkü string halindeki verileri dizi olarak dışarı çıkartmam gerekiyor. Sonrasınde localStorage'ın getItem metodu ile verileri çağırıyorum. Buradaki mantık; Sayfa yüklendiğinde, localStorage’da daha önce kaydedilmiş veriler varsa bunlar JSON.parse ile string’den diziye çevirip ekrana yazdırıyorum. Eğer localStorage’da hiç veri yoksa boş bir dizi oluşturuyorum. çünkü local storagede veri yoksa null dönecek ve null döndüğünde bu null üzerine veri kaydedemeyeceğimiz için boş dizi oluşturup bu boş diziye veri ekleyerek devam ediyorum. ”
  const todos = JSON.parse(localStorage.getItem("todos")) || [];


  // to-do list verilerini Localtorage'a kaydetmek için  todos adında bir key tanımlamıştım. Bu key içine gelecek input verilerini JSON formatında stringleştirip localStorage'a kaydediyorum.
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  // verileri yukarıda hem localStorage kaydettim hem de localStorage'den çağırdım. şimdi bu verileri ekranda göstereceğiz. RenderTodos adında fonksiyon tanımladım ve 
  function renderTodos() {
    todoList.innerHTML = ""; // burada önce eski li'leri siliyorum çünkü her seferinde ekrana basacağım güncel veriyi göstereceğim.

    todos.forEach((todo, index) => {   //  todos dizisindeki her bir eleman için br li oluşturup index ile bu li'ler takip ediyorum. li'yi takip etmemin sebebi li içeriğinde olacak olaylar için.(mesela silmek  için )  
      const li = document.createElement("li");
      li.textContent = todo.text; // burada her bir li içerisinde ne yazacağını söylüyorum. o da todo'nun texti oluyor. 


    // burada görevler ekrana render edilirken completed özellikleri kontrol ediliyor ve eğer completed olmuş ise css'deki "checked" classının özelliklerini alıyor. 
      if (todo.completed) {      
        li.classList.add("checked");
      }


      // burada görevi tamamlandı olarak işaretlemek için li'ye tıklandığında hangi olayın olacağını belirtiyorum. Eğer li'ye tıklanırsa todo'nun completed özelliği ne ise tam tersine çeviriyorum. 
      li.addEventListener("click", () => {
        todo.completed = !todo.completed;
        saveTodos(); // burada yaptığım değişikliği kaydediyorum
        renderTodos(); // ve tekrar renderTodos fonksiyonunu çağırarak ekranda güncel halini gösteriyorum.
      });

      // Silme butonu oluşturuyorum.
      const span = document.createElement("span");
      span.textContent = "×";
      span.className = "close";
      span.addEventListener("click", (e) => {  // burada span içndeki  x işaretine tıklandığında hangi olayın olacağını belirtiyorum
        e.stopPropagation(); // Li'ye tıklamayı engelliyoruzm üstü çizili olmaması için
        todos.splice(index, 1); // todos dizisinde, tıklanan görev hangi sıradaysa onu diziden çıkarıyoruz. 
        saveTodos();
        renderTodos();
      });

      li.appendChild(span);
      todoList.appendChild(li);  // burada her bir li elementini id'si "list" olan ul'ye ekliyorum. 
    });
  }

  // Yeni görev ekleme
  addToDoBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text) {
      todos.push({ text, completed: false });
      todoInput.value = "";
      saveTodos();
      renderTodos();
      // Başarılı toast
      $("#successToast").toast("show");
    } else {
      // Hatalı toast
      $("#errorToast").toast("show");
    }
  });

  // Enter tuşu ile ekleme
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addToDoBtn.click();
    }
  });

  renderTodos();
});
