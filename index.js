

async function  fetchData()
{
	const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
const data = await res.json()
const imageUrl = data.urls.full
document.body.style.backgroundImage= `url(${imageUrl})`
}

fetchData()