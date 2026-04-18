function Navbar() {
	return (
		<div className="navbar bg-transparent fixed py-2 z-50">
		  <div className="flex-1">
		    <a className="btn btn-ghost text-3xl text-red-600">NETFLIX</a>
		  </div>
		  <div className="flex-none">
		    <ul className="menu menu-horizontal px-1">
		      <li className="px-2"><a className="text-white">Home</a></li>
		      <li className="px-2"><a className="text-white">Trending</a></li>
		      <li className="px-2">
		        <details>
		          <summary className="text-white">Catalog</summary>
		          <ul className="bg-base-100 rounded-t-none p-2">
		            <li><a>Adventure</a></li>
		            <li><a>Romansans</a></li>
		          </ul>
		        </details>
		      </li>
		      <li className="px-2"><a className="text-white">Movies</a></li>
		      <li className="px-2"><a className="text-white">Serviscs</a></li>
		      <li className="px-2"><a className="btn btn-ghost bg-red-600 text-white">Sign In</a></li>
		    </ul>
		  </div>
		</div>
	)
}

export default Navbar;