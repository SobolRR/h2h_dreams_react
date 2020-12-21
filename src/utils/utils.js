
export function sortDataByProp (arr, prop) {
    const copyArr= [...arr]
    return copyArr.sort (
        function (a, b) {
            if (a[prop] < b[prop]){
                return -1;
            } else if (a[prop] > b[prop]){
                return 1;
            } else {
                return 0;   
            }
        }
    );
}

export const calculateDreamProgress = (presents,currentSum) => {
    
    const regex = /([0-9]{1,5})/g;
    const totalPrice = presents.reduce((acc, present)=> {
      return acc + parseInt(present.price.match(regex)[1])
    },0)
    const dreamProgress = currentSum * 100 / totalPrice
    return dreamProgress.toFixed()
  }

  export const scrollTop = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'});
  }

 
