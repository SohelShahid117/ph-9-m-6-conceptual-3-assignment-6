// alert('hi')
//giasVaiGitub:https://github.com/gias-uddin-swe/B9-API-Solved?tab=readme-ov-file
/*
API
        LatestPosts: - https://openapi.programming-hero.com/api/retro-forum/latest-posts

        AllPosts: - https://openapi.programming-hero.com/api/retro-forum/posts

        PostSearchByQuery
        PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=categoryName

        Example:  
        PostByQuery: - https://openapi.programming-hero.com/api/retro-forum/posts?category=coding
*/

// const loadPost = () =>{
//     const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
//     console.log(url);
// }
// loadPost();

const loadPost = async (qry='') =>{
    const url = `https://openapi.programming-hero.com/api/retro-forum/posts?${qry}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    console.log(data.posts);
}
const handleSearch = () =>{
    const searchBoxValue = document.getElementById('search-box').value;
    console.log(searchBoxValue)
    loadPost(`category=${searchBoxValue}`);
}

// loadPost();

const loadAllProducts= async (qry='') => {
    const url = `https://fakestoreapi.com/products${qry}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    data.forEach((itm)=>{
        console.log(itm);
    })
}

const itemWiseProduct=()=>{
    // https://fakestoreapi.com/products/category/jewelery
    // loadAllProducts(`/category/jewelery`)
    // loadAllProducts(`/category/electronics`)
    loadAllProducts();
}
itemWiseProduct()
// loadAllProducts()

//30 min

