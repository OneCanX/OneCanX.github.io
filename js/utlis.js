const mengd={wrap(e,t,r="",n=""){t=document.createElement(t);r&&(t.id=r),n&&(t.className=n),e.parentNode.insertBefore(t,e),t.appendChild(e)},$id(e){return document.getElementById(e)},$query(e){return document.querySelector(e)},$queryAll(e){return document.querySelectorAll(e)},getScript(e,t){if(Array.isArray(this.isGetScript)){if(this.isGetScript.includes(e))return t();this.isGetScript.push(e)}else this.isGetScript=[],this.isGetScript.push(e);var r=document.createElement("script");r.src=e,void 0!==t&&(r.readyState?r.onreadystatechange=function(){"loaded"!=r.readyState&&"complete"!=r.readyState||(r.onreadystatechange=null,t())}:r.onload=function(){r.onload=null,t()}),document.body.appendChild(r)},throttle(t,r){var n=0;return function(){var e=new Date;r<e-n&&(t.apply(this,arguments),n=e)}}};