// Embed Stylesheet

var css = 
`
@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);@font-face{font-family:HelveticaNormal;src:url(https://res.cloudinary.com/dp1xkuswt/raw/upload/v1597987314/Helvetica_uld9sz.ttf)}.hidden{display:none!important}.alert-super-container input:focus{outline:0}.alert-super-container *{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.alert-super-container{background:rgb(0 0 0 / 40%);position:fixed;top:0;left:0;height:100vh;width:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;transition:.4s}.alert-container{max-width:380px;width:90%;background:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;border-radius:10px;box-shadow:2px 2px 8px 2px rgb(0 0 0 / .1);overflow:hidden;transition:.4s}.alert-heading{color:rgb(115 121 122);font-family:HelveticaNormal;margin-top:20px;margin-bottom:10px;font-size:20px;width:80%;text-align:center}.alert-paragraph{max-height:250px;overflow-y:scroll;font-family:HelveticaNormal;padding-top:10px;padding-bottom:10px;font-size:14px;padding-right:10px;width:80%;text-align:center;color:rgb(123 127 127);margin-bottom:10px}.alert-paragraph{max-height:300px}.alert-paragraph::-webkit-scrollbar{width:0}.alert-paragraph::-webkit-scrollbar-track{background:0 0}.alert-paragraph::-webkit-scrollbar-thumb{background:0 0}.alert-paragraph::-webkit-scrollbar-thumb:hover{background:0 0}.alert-btn{cursor:pointer;font-family:Rubik,sans-serif;padding-bottom:20px;font-size:18px;padding-top:10px;margin-top:10px;width:100%;text-align:center;color:#6c6263;border-top:1px solid #b6c6d1;background:#fcf9ff;transition:.1s}.alert-input-container{width:80%;margin:auto;margin-top:10px}.alert-input{width:100%;border-radius:4px;border:1.85px solid #b4b3b5;padding:4px;padding-left:12px;padding-top:6px;padding-bottom:6px;font-size:15px;color:#5e575e;font-family:Roboto,sans-serif}a{color:#08f}a{text-decoration:none}a:hover{text-decoration:none}.alert-input::placeholder{color:#b4b3b5}.alert-input:-ms-input-placeholder{color:#b4b3b5}.alert-input::-ms-input-placeholder{color:#b4b3b5}.alert-btn:active{background:#f0edf3}.alert-hidden{display:none}.alert-c-ph-1{opacity:0;padding-top:40px}.alert-icon-top{margin-top:20px}.sa{width:140px;height:140px;background-color:#fff;display:flex;align-items:center;justify-content:center}.sa-warning{border-radius:50%;border:4px solid #f8bb86;box-sizing:content-box;height:80px;padding:0;position:relative;background-color:#fff;width:80px;animation:scaleWarning .75s infinite alternate}.sa-warning:after,.sa-warning:before{background:#fff;content:'';border-radius:50%;height:100%;position:absolute;width:100%}.sa-warning:before{display:inline-block;opacity:0;animation:pulseWarning 2s linear infinite}.sa-warning:after{display:block;z-index:1}.sa-warning-body{background-color:#f8bb86;border-radius:2px;height:47px;left:50%;margin-left:-2px;position:absolute;top:10px;width:5px;z-index:2;animation:pulseWarningIns .75s infinite alternate}.sa-warning-dot{background-color:#f8bb86;border-radius:50%;bottom:10px;height:7px;left:50%;margin-left:-3px;position:absolute;width:7px;z-index:2;animation:pulseWarningIns .75s infinite alternate}@keyframes scaleWarning{0%{transform:scale(1)}30%{transform:scale(1.02)}100%{transform:scale(1)}}@keyframes pulseWarning{0%{background-color:#fff;transform:scale(1);opacity:.5}30%{background-color:#fff;transform:scale(1);opacity:.5}100%{background-color:#f8bb86;transform:scale(2);opacity:0}}@keyframes pulseWarningIns{0%{background-color:#f8d486}100%{background-color:#f8bb86}}.alert-dark .alert-container{background:#141425;box-shadow:2px 2px 8px 2px rgb(0 0 0 / .1)}.alert-dark .alert-heading{color:rgb(196 196 221)}.alert-dark .alert-paragraph{color:rgb(146 146 185)}.alert-dark .alert-btn{color:#a7abe0;border-top:1px solid #373963;background:#1b1b30}.alert-dark .alert-input{border:2.85px solid #1d1d35;background:#1d1d35;color:#dfdfdf;transition:.4s}.alert-dark .alert-input:focus{border:2.85px solid #555582;background:#10101e;color:#dfdfdf;transition:.4s}.alert-dark a{color:#08f}.alert-dark a{text-decoration:none}.alert-dark a:hover{text-decoration:none}.alert-dark .alert-input::placeholder{color:#8787ad}.alert-dark .alert-input:-ms-input-placeholder{color:#8787ad}.alert-dark .alert-input::-ms-input-placeholder{color:#8787ad}.alert-dark .alert-btn:active{background:#202038}.alert-dark .alert-hidden{display:none}.alert-dark .alert-c-ph-1{opacity:0;padding-top:40px}.alert-dark .alert-icon-top{margin-top:20px}.alert-dark .sa{width:140px;height:140px;background-color:transparent}.alert-dark .sa-warning{border-radius:50%;border:4px solid #f66a60;box-sizing:content-box;height:80px;padding:0;position:relative;background-color:#fff;width:80px;animation:scaleWarning2 .75s infinite alternate}.alert-dark .sa-warning:after,.sa-warning:before{background:#0e0e1a;content:'';border-radius:50%;height:100%;position:absolute;width:100%}.alert-dark .sa-warning:before{display:inline-block;opacity:0;animation:pulseWarning2 2s linear infinite}.alert-dark .sa-warning:after{display:block;z-index:1}.alert-dark .sa-warning-body{background-color:#f66a60;border-radius:2px;height:47px;left:50%;margin-left:-2px;position:absolute;top:10px;width:5px;z-index:2;animation:pulseWarningIns2 .75s infinite alternate}.alert-dark .sa-warning-dot{background-color:#f66a60;border-radius:50%;bottom:10px;height:7px;left:50%;margin-left:-3px;position:absolute;width:7px;z-index:2;animation:pulseWarningIns2 .75s infinite alternate}@keyframes scaleWarning2{0%{transform:scale(1)}30%{transform:scale(1.02)}100%{transform:scale(1)}}@keyframes pulseWarning2{0%{background-color:#f66a60;transform:scale(1);opacity:.5}30%{background-color:#f66a60;transform:scale(1);opacity:.5}100%{background-color:#f66a60;transform:scale(2);opacity:0}}@keyframes pulseWarningIns2{0%{background-color:#f66a60}100%{background-color:#f66a60}}
`,
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

// Embed HTML

var div = document.createElement('div');
div.setAttribute('id', 'hyperAlert');
div.innerHTML = 
`
<div id="alertSuperContainer" class="alert-super-container alert-hidden alert-c-ph-1"><div class="alert-container"><div id="alertIcon" class="alert-icon-top hidden"><div class="sa"><div class="sa-warning"><div class="sa-warning-body"></div><div class="sa-warning-dot"></div></div></div></div><div id="alertTitle" class="alert-heading"> Swalt Heading</div><div id="alertInputContainer" class="alert-input-container hidden"> <input id="alertInput" type="text" class="alert-input" placeholder="Enter Text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="20"></div><div id="alertDescription" class="alert-paragraph"></div><div id="alertBtn" class="alert-btn"> Close</div></div></div>
`;
document.querySelector("body").appendChild(div);

function showSwalt(){
    document.getElementById("alertSuperContainer").classList.remove("alert-hidden");
        setTimeout(function() {
            document.getElementById("alertSuperContainer").classList.remove("alert-c-ph-1");
    }, 0);
}

var swaltRef = {};

swaltRef.element = document.getElementById("alertInput");
swaltRef.value = "";
swaltRef.status = false;

var alertInput = document.getElementById("alertInput");
var alertValue = "";

function swalt(arg1, arg2){

    if(arg1 !== undefined){
        document.getElementById("alertDescription").innerHTML = arg1;
    } else {
        document.getElementById("alertDescription").innerHTML = "This is the sample text for Swalt. Enter your text in the first argument to call the swalt with your custom text.";
    }

    if(arg2 == undefined){
        showSwalt();
    } else {

        // title
        if(arg2.title !== undefined){
            document.getElementById("alertTitle").innerHTML = arg2.title;
        } else {
            document.getElementById("alertTitle").innerHTML = "Swalt Heading";
        }
        
        // showIcon
        if(arg2.showIcon !== undefined){
            if(arg2.showIcon == false){
                document.getElementById("alertIcon").classList.add("hidden");
            } else {
                document.getElementById("alertIcon").classList.remove("hidden");
            }
        } else {
            document.getElementById("alertIcon").classList.add("hidden");
        }

        // input
        if(arg2.input !== undefined){
            if(arg2.input == false){
                document.getElementById("alertInputContainer").classList.add("hidden");
            } else if(arg2.input == true) {
                document.getElementById("alertInputContainer").classList.remove("hidden");
            }
        } else{
            document.getElementById("alertInputContainer").classList.add("hidden");
        }        

        // mode
        if(arg2.mode !== undefined){
            if(arg2.mode == "light"){
                document.getElementById("alertSuperContainer").classList.remove("alert-dark");
            } else if(arg2.mode == "dark") {
                document.getElementById("alertSuperContainer").classList.add("alert-dark");
            }
        } else{
            document.getElementById("alertSuperContainer").classList.remove("alert-dark");
        }

        // inputPlaceholder
        if(arg2.inputPlaceholder !== undefined){
            document.getElementById("alertInput").placeholder = arg2.inputPlaceholder;
        } else {
            document.getElementById("alertInput").placeholder = "Enter Text";
        }

        // defaultValue
        if(arg2.defaultValue !== undefined){
            document.getElementById("alertInput").value = arg2.defaultValue;
        } else {
            document.getElementById("alertInput").value = "";
        }

        // btnValue
        if(arg2.btnValue !== undefined){
            document.getElementById("alertBtn").innerText = arg2.btnValue;
        } else {
            document.getElementById("alertBtn").innerText = "Close";
        }

        showSwalt();
        swaltRef.status = true;

    }
    
    

}

// Custom Listerners

const customEvent = new Event("swaltClosed");
const customEvent2 = new Event("swaltBtnClicked");

document.getElementById("alertInput").addEventListener("input", function(e){
    alertValue = this.value;
    swaltRef.value = this.value;
});

document.getElementById("alertBtn").addEventListener("click", function(e) {
    document.getElementById("alertSuperContainer").classList.add("alert-c-ph-1");
    alertInput.dispatchEvent(customEvent2);
    setTimeout(function(){
        document.getElementById("alertSuperContainer").classList.add("alert-hidden");
        alertInput.dispatchEvent(customEvent);
    }, 400);
    swaltRef.status = false;
});

module.exports.swalt = swalt;

