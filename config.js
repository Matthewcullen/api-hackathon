function getMonsterPics(monster) {
  $.ajax({
    method: "GET",
    url: "https://api.imgur.com/3/gallery/JweWCpf/?showViral=true&mature=true",
    data: "none",
    headers: {
      Authorization: "Client-ID ff01923a8e2bd51"
    },
    success: function(data){getMonsterPicsSuccess(data, monster)},
    error: getMonsterPicsError,
  })
}

// https://imgur.com/gallery/JweWCpf
