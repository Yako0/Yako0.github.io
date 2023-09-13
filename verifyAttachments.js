var saveCreateAP=document.getElementById('saveCreateAP');
saveCreateAP.addEventListener("click", saveCreateAP());
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
		function saveCreateAP(){
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
