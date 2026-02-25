document.addEventListener("DOMContentLoaded", function () {

    const base = CONFIG.indico.baseUrl;

    document.getElementById("link-timetable").href =
        base + CONFIG.indico.timetable;

    document.getElementById("link-speakers").href =
        base + CONFIG.indico.invitedSpeakers;

    document.getElementById("link-registration").href =
        base + CONFIG.indico.registration;

    document.getElementById("link-participants").href =
        base + CONFIG.indico.participants;

});