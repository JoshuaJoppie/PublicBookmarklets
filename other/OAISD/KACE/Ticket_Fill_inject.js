function changeit(a) {
    document.getElementById("edit-title").children[0].innerHTML = a, document.getElementById("fields[title]").value = a
}
var userinfo = JSON.parse(get_url("https://kbox1100.oaisd.org/common/ajax_lookup_list.php?query_type=user&limit=1&org_id=1&search=" + document.getElementById("fields[custom_field_value4]").value)).records[0];
document.getElementById("fields[custom_field_value13]").value = userinfo.id, document.getElementById("select2-chosen-25").innerHTML = userinfo.full_name;
var updatedTitleDraft = document.getElementById("edit-title").children[0].innerHTML,
    mainn = getTicketTitle(),
    before = mainn;
mainn != updatedTitleDraft && (mainn = updatedTitleDraft, before = updatedTitleDraft), mainn = mainn.replace("@hps21.org", "").replace(" | " + userinfo.user_name + " - " + userinfo.full_name, "").replace(userinfo.user_name, "").replace("- -", "-").replace("--", "-").replace("-  -", "-").replace(" - | ", " | ").replace(" - - ", " - "), mainn = mainn.replace("- -", "-").replace("--", "-").replace("- -", "-").replace("- -", "-").replace("-  -", "-").replace(" - | ", " | ");
var appendw = mainn + " | " + userinfo.user_name + " - " + userinfo.full_name;
kbootbox_conflict_modal("Do you want to append the ticket title?<br><br>" + before + "<br>" + appendw, function () {
    changeit(appendw)
}, "");
