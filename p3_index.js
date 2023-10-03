var array=[];

function generate(){
    array=[];
    var number = document.getElementById("number").value;
  
 for(i=0;i<number;i++){
   array[i]=Math.floor(Math.random() * 100) + 1;
 }
    document.getElementById("generate").innerHTML= array;
}

function bubble(arr){
  var i, j;
  var len = arr.length;
   
  var isSwapped = false;
   
  for(i =0; i < len; i++){
     
    isSwapped = false;
     
    for(j = 0; j < len; j++){
        if(arr[j] > arr[j + 1]){
          var temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
    }
     
    // IF no two elements were swapped by inner loop, then break
     
    if(!isSwapped){
      break;
    }
  }
  document.getElementById("bubble").innerHTML= array;
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    document.getElementById("quick").innerHTML= array;
}
function BubbleFull(){
    start = performance.now();
    bubble(array);
    end = performance.now();
    timeTaken = end - start;
    document.getElementById("timebubble").innerHTML="Function took " + timeTaken + " milliseconds";
    
}
function QuickFull(){
    start = performance.now();
    quickSort(array, 0, array.length - 1);
    end = performance.now();
    timeTaken = end - start;
    document.getElementById("timequick").innerHTML="Function took " + timeTaken + " milliseconds";

}