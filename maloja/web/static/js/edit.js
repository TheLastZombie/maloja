// JS for all web interface editing / deletion of scrobble data

function toggleDeleteConfirm(element) {
	element.parentElement.parentElement.classList.toggle('active');
}

function deleteScrobble(id,element) {
	element.parentElement.parentElement.parentElement.classList.add('removed');

	neo.xhttpreq("/apis/mlj_1/delete_scrobble",data={'timestamp':id},method="POST",callback=(()=>null),json=true);

}

function toggleReparseConfirm(element) {
	element.parentElement.parentElement.classList.toggle('active');
}

function reparseScrobble(id, element) {
	toggleReparseConfirm(element);
	
	neo.xhttpreq("/apis/mlj_1/reparse_scrobble",data={'timestamp':id},method="POST",callback=(()=>null),json=true);

}
