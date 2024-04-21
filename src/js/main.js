const avatar = document.querySelector('.avatar')
const avatarInfo = document.querySelector('.avatar-info')
const avatarShare = document.querySelector('.avatar-share')
const buttonShare = document.querySelector('.button-share')

buttonShare.addEventListener('click', (event) => {
    avatar.classList.toggle('share');
    avatarInfo.classList.toggle('hidden')
    avatarShare.classList.toggle('hidden')
    event.currentTarget.classList.toggle('button-share-active')
})
