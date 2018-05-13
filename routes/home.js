var express = require('express');
var router = express.Router();
const HomeController = require('../controller/HomeController');
const ArtistController = require('../controller/ArtistController');
const AlbumController = require('../controller/AlbumController');
const FeatureArtistController = require('../controller/FAController');
const SongController = require('../controller/SongController');
/* / means the root of the current drive
  ./ means the current directory
 ../ means the parent of the current directory
*/

/* GET home page. */
 router.get('/', HomeController.getEverything);

/* Display Add Artist page. */
router.get('/addArtist', ArtistController.showAddArtist);

/* Add Artist page. */
router.post('/addArtist', ArtistController.addArtist);

/*Display add Album page*/
router.get('/addAlbum', AlbumController.showAddAlbum);

/* Add Album page. */
router.post('/addAlbum', AlbumController.addAlbum);

/*Add Featured artist page*/
router.get('/addFeatureArtist',  FeatureArtistController.showAddFA);

/*Add Feature artist*/
router.post('/addFeatureArtist', FeatureArtistController.addFA);

/*Display Add song page*/
router.get('/addSong', SongController.showAddSong);

/*Add song*/
router.post('/addSong', SongController.addSong);

//
// <!-- <script>
//   $(document).ready( function() {
//
//     var arr = [];
//     let isFound;
//
//     for(let i = 0; i < <%=song.length%>; i++)
//       {
//         console.log("asd");
//          isFound = false;//start with can't find it
//         if(i === 0){//add first element during the first loop
//           arr[i] = <%=song[i]%>;
//           continue;
//         }
//       for(let j = 0; j < arr.length; j++){//loop through arr
//           if(song[i]===arr[j]){ //if the word is about to be added is already exists
//                 isFound = true;//swtich to true
//                 continue;
//               }
//           }//end of for
//           if(isFound === false){//only add if isFound is false
//           arr[i]= song[i];
//           }
//     }//end of first for
//   })
// </script> -->

// <!--
//     <div class="ui dividing header">Featured Artist Database</div>
//
//       <div class ="ui four column equal width center padded grid">
//         <% fa.forEach(function(fa){ %>
//           <div class="column">
//           <h3 class="ui center aligned olive segment"><%=fa.faname%></h3>
//           </div>
//         <% }) %>
//       </div> -->


module.exports = router;
