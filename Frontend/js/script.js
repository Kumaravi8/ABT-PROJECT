function signup(){
    const d=document.getElementById("b");
    d.style.backgroundColor="white";
    d.style.border="1.5px solid #DC5014";
    const a=document.getElementById("c");
    a.style.backgroundColor="#FFEAD8";
    a.style.border="none";
    const k=document.getElementById("boxinput1");
    k.style.display="block";
    const k1=document.getElementById("boxinput");
    k1.style.display="none";
    document.getElementById("we").innerHTML="Create an Account"
    document.getElementById("ch").style.display="inline";
    document.getElementById("we1").innerHTML="I agree with";
    document.getElementById("a1").innerHTML="terms and conditions";
    document.getElementById("ch").style.marginRight="10px";
    document.getElementById("ch").style.marginTop="8px";

    
}
function signin(){
    const d=document.getElementById("c");
    d.style.backgroundColor="white";
    d.style.border="1.5px solid #DC5014";
    const a=document.getElementById("b");
    a.style.backgroundColor="#FFEAD8";
    a.style.border="none";
    const k=document.getElementById("boxinput1");
    k.style.display="none";
    const k1=document.getElementById("boxinput");
    k1.style.display="block";
    document.getElementById("we").innerHTML="Welcome Back"
    document.getElementById("we1").innerHTML="Welcome Back, Please enter your details";
    document.getElementById("a1").innerHTML="";
    document.getElementById("ch").style.display="none";
}
function signin1(){
    signup();
}
function singup1(){
    signin();
}
