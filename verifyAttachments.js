var saveCreateAP=document.getElementById('saveCreateAP');
var btn1=document.getElementById('btn1');
if (btn1!=null){
btn1.addEventListener('click', ()=>{
console.log('btn1');
	alert('Hi There');
});}else{console.log('no btn1');}
	if(saveCreateAP!=null){
		console.log('saveCreateAP');
saveCreateAP.addEventListener('click', ()=>{
	console.log('saveCreateAP 1');
		var attachment=document.getElementById('pt1:_FOr1:1:_FONSr2:0:MAnt2:1:pm1:r1:0:ap1:r2:0:a1:aapg_link');
	console.log('saveCreateAP 2 ' );
		var attachmentTbl=attachment.firstChild;
	console.log('saveCreateAP 3 ');
		var attachmentFirstRow=attachmentTbl.firstChild;
	console.log('saveCreateAP 4 ');
		var attachmentFirstRowFirstData=attachmentFirstRow.firstChild;
	console.log('saveCreateAP 5 ');
		console.log(attachmentFirstRowFirstData);
		if(attachmentFirstRowFirstData != null){
		 
		var noAttachments=attachmentFirstRowFirstData.innerText;
		console.log(noAttachments);
		alert('Attachment is required');}
		 
		  
		else{var divBtn= document.getElementById('pt1:_FOr1:0:_FONSr2:0:MAnt2:0:pm1:r1:0:ap1:ct5');
		var aSave = divBtn.firstChild;
		console.log(aSave);
		if(aSave!=null){
		aSave.click();
		}
		}
		});}else{console.log('no saveCreateAP');}
function saveManageAP(){
		var attachment=document.getElementById('pt1:_FOr1:0:_FONSr2:0:MAnt2:0:pm1:r1:0:ap1:r2:0:a1:aapg_link');
		var attachmentTbl=attachment.firstChild;
		var attachmentFirstRow=attachmentTbl.firstChild;
		var attachmentFirstRowFirstData=attachmentFirstRow.firstChild;
		console.log(attachmentFirstRowFirstData);
		if(attachmentFirstRowFirstData != null){
		 
		var noAttachments=attachmentFirstRowFirstData.innerText;
		console.log(noAttachments);
		alert('Attachment is required');}
		 
		  
		else{var divBtn= document.getElementById('pt1:_FOr1:0:_FONSr2:0:MAnt2:0:pm1:r1:0:ap1:ct5');
		var aSave = divBtn.firstChild;
		console.log(aSave);
		if(aSave!=null){
		aSave.click();
		}
		}
		};
		function saveCreateAPF(){
		var attachment=document.getElementById('pt1:_FOr1:0:_FONSr2:0:MAnt2:0:pm1:r1:0:ap1:r2:0:a1:aapg_link');
		var attachmentTbl=attachment.firstChild;
		var attachmentFirstRow=attachmentTbl.firstChild;
		var attachmentFirstRowFirstData=attachmentFirstRow.firstChild;
		console.log(attachmentFirstRowFirstData);
		if(attachmentFirstRowFirstData != null){
		 
		var noAttachments=attachmentFirstRowFirstData.innerText;
		console.log(noAttachments);
		alert('Attachment is required');}
		 
		  
		else{var divBtn= document.getElementById('pt1:_FOr1:0:_FONSr2:0:MAnt2:0:pm1:r1:0:ap1:ct5');
		var aSave = divBtn.firstChild;
		console.log(aSave);
		if(aSave!=null){
		aSave.click();
		}
		}
		};
		function testMe(){
			
			alert('I am OK!');
		};
