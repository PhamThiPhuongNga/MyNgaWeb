function KiemtraForm()
{
    var firstname = document.frmsubmit.firstname.value;
    var lastname = document.frmsubmit.lastname.value;
    var username = document.frmsubmit.username.value;
    var city = document.frmsubmit.city.value;
    var state = document.frmsubmit.state.value;
    var zip = document.frmsubmit.zip.value;
    if (firstname == '')
    {
        document.getElementById("baoloi1").innerHTML="Chưa nhập firstname mà";
        return false;
    }
    if (lastname == '')
    {
        document.getElementById("baoloi2").innerHTML="Chưa nhập lastname mà";
        return false;
    }
    if (username == '')
    {
        document.getElementById("baoloi3").innerHTML="Chưa nhập username mà";
        return false;
    }
     if (city == '')
    {
        document.getElementById("baoloi4").innerHTML="Chưa nhập city mà";
        return false;
    }
     if (state == '')
    {
        document.getElementById("baoloi5").innerHTML="Chưa nhập state mà";
        return false;
    }
    if (zip == '')
    {
        document.getElementById("baoloi6").innerHTML="Chưa nhập zip mà";
        return false;
    }
    if (frmsubmit.agree.checked == false)
    {
        document.getElementById("baoloi7").innerHTML="Chưa nhập agree mà";
        return false;
    }
    return true;
}
