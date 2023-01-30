# Semantic Segmentation


[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:reejugn.kim@gmail.com)](mailto:reejung.kim@gmail.com) 
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=www.linkedin.com/in/reejungkim/)](https://www.linkedin.com/in/reejungkim/) 
[![Git page](http://img.shields.io/badge/-Portfolio-black?style=flat-square&logo=github&link=https://reejungkim.github.io/)](https://reejungkim.github.io/)
<br></br>

<img src='imgs/people-street-city.jpg' height='400' width='250'><img src='imgs/people-street-city_masked.jpg' height='400' width='250'><img src='imgs/people-street-city_masked_coco.jpg' height='400' width='250'>


<img src='imgs/catsdogs2.jpg' height='300' width='350'><img src='imgs/catsdogs2_masked.jpg' height='300' width='350'>

<br></br>



Model comparison overview
<img src='imgs/model_comparison.png' height='300' width='850'>


Vision transformer

<img src='imgs/vit_explained.png' height='300' width='350'>


Performance Evaluation
- Mean Intersection-over-Union
intersection = np.logical_and(target, prediction)
union = np.logical_or(target, prediction)
iou_score = np.sum(intersection) / np.sum(union)

## Reference
[transformers for image recognition](https://arxiv.org/pdf/2010.11929.pdf)




<!-- <img src='imgs/colormap.png' height='500' width='350'>
