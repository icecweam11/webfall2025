function askQuestion() {
    var p = prompt ("What are the four D's?");
    if (p != null) {
        document.getElementById 
        ('question').innerHTML = 
        'Yes! ' + p + 'is correct!';
    }
}

 function pFun() {
            var p = document.getElementById('p-fun');
            p.innerHTML='Dyslexia, Dysgraphia, Dyscalculia, and Dyspraxia';
            p.style.color='red';
            p.style.function= '30px';
      }
