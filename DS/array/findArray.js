export function findArrayItem(arr, item){
    for (let i =0; i< arr.length; i++){
        if(arr[i]=== item)
          return {item: item, index:i};

          return -1;
    }
}