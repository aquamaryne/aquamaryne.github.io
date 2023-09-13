let dirName = {
    'in': 'info',
    'ga': 'games',
    're': 'repos',
    'bb': 'bug bounty',
    'pt': 'pen test'
};

function updateDirName(dir){
    let dirNames = dirName[dir] || 'Uknown Directory';
    document.getElementById('track').innerHTML = dirNames;
};

let dirLink = document.querySelectorAll('.dir-link');
dirLink.forEach(function(link){
    link.addEventListener('click', function(){
        let selDir = link.getAttribute('data-directory');
        updateDirName(selDir);
    })
})