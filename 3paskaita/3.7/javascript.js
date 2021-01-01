document.querySelectorAll(".mini-img-container img").forEach(function (miniImgContainer) {
			miniImgContainer.addEventListener("click", function () {
				
				document.querySelector('.foto img').src = this.src;
				document.querySelector('.foto .text p').textContent = this.alt;
//				document.querySelector('.foto .text p').innerHTML = this.alt;
				
			
//					e.preventDefault();
//					console.log(miniImgContainer.querySelecto r('img').getAttribute('src'));
				
						
					});
			});