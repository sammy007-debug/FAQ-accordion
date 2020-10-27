var arr = document.getElementsByClassName("accordion");
var i;
var len = arr.length;
for (i = 0; i < len; i++) {
    arr[i].addEventListener("click", faq )
    
}

function faq() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    }