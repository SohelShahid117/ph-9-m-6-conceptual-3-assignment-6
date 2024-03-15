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

/*
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
*/

// loadPost();

const loadAllProducts= async (qry='') => {
    const url = `https://fakestoreapi.com/products${qry}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ' ';

    data.forEach((itm)=>{
        const div = document.createElement('div');
        // card w-96 bg-base-100 shadow-xl"
        div.classList.add('card');
        div.classList.add('w-96');
        div.classList.add('bg-base-100');
        div.classList.add('shadow-xl');
        div.classList.add('mt-5');
        div.innerHTML = `

          <figure class="px-10 pt-10" >
                    <img src='${itm.image}' class="rounded-xl h-60">
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${itm.title}</h2>
            <p>${itm.description}</p>
            <div class="card-actions">
                <h4>Price:${itm.price}</h4>
              <button class="btn btn-primary">${itm.category}</button>
            </div>
            <hr>
            <div class="price-container">

                <div class="stats shadow">
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">Total Likes</div>
                        <div class="stat-value text-primary">25.6K</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                </div>

                <div class="img-container rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />450
                </div>

                <button class="btn btn-success">add-to-cart</button>
                
            </div>
        
        `
        console.log(itm);
        productContainer.appendChild(div);
    })

}

const handleSearch = () =>{
    const searchBoxValue = document.getElementById('search-box').value;
    console.log(searchBoxValue)
    loadAllProducts(`/category/${searchBoxValue}`);
}

/*

const itemWiseProduct=()=>{
    // https://fakestoreapi.com/products/category/jewelery
    // loadAllProducts(`/category/jewelery`)
    // loadAllProducts(`/category/electronics`)
    loadAllProducts();
}
itemWiseProduct()
// loadAllProducts()
*/


//45 min
