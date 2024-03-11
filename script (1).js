document.addEventListener("DOMContentLoaded", function() {
      const flowers = document.querySelectorAll('.flower');

        flowers.forEach((flower, index) => {
            setTimeout(() => {
                  flower.style.transform = 'scale(1)';
                        flower.style.transition = 'transform 2s ease';
                              setTimeout(() => {
                                      flower.querySelector('.flower::after').style.display = 'block';
                                              flower.querySelector('.flower::after').classList.add('blink');
                                                    }, 2000);
                                                        }, index * 1000);
                                                          });
                                                          });
