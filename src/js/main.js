const avatar = document.querySelector('.avatar')
const avatarInfo = document.querySelector('.avatar-info')
const avatarShare = document.querySelector('.avatar-share')
const buttonShare = document.querySelector('.button-share')

buttonShare.addEventListener('click', (event) => {
    if (document.body.clientWidth < 1440) {
        avatar.classList.toggle('share');
        avatarInfo.classList.toggle('hidden')
        avatarShare.classList.toggle('hidden')
    } else {
        avatarShare.classList.toggle('hidden')
        avatarShare.classList.toggle('share')
    }
    event.currentTarget.classList.toggle('button-share-active')
})
