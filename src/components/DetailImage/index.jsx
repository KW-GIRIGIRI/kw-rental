import { useState } from "react"
import Image from "../../modules/Image"
import * as S from "./style"

// dummy images -> 
const images = [
  'https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?w=996&t=st=1677078194~exp=1677078794~hmac=d825794a2549585c3b9374dc71976a8e85529189b00393eaa9f8fe4f76c36825',
  'https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=996&t=st=1677078207~exp=1677078807~hmac=7e23a062e9420fadf600079d1364d67e11ff7c59f0c0b70bd40695105217f3aa',
  'https://img.freepik.com/premium-photo/viewpoint-view-sunset-attractions-thailand_38404-284.jpg?w=996',
  'https://img.freepik.com/free-photo/green-field_1417-1577.jpg?w=996&t=st=1677078235~exp=1677078835~hmac=9076c68eeb626a5e8ef70dea974753297a00d42399d8c5831684b3db147f0509',
]

export default function DetailImage() {
  const [currentImg, setCurrentImg] = useState(images[0])
  
  const handleImgChange = (e) => {
    setCurrentImg(e.target.src)
  }

  return (
    <S.ImageWrap>
      <ul>
        {
          images.map((image, index) => {
            return (
              <S.ImageLi key={index} >
                <Image
                  onClick={handleImgChange}
                  width="76px" height="76px"
                  borderRadius={props => props.theme.borderRadius.lv2} src={image} alt="" />
              </S.ImageLi>
            )
          })
        }
      </ul>
      <Image 
        width="364px" height="364px"
        borderRadius={props => props.theme.borderRadius.lv2} src={currentImg} alt="" />
    </S.ImageWrap>
  )
}
