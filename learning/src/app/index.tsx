import { Text, View,Image,FlatList,SectionList, StyleSheet,TextInput,Pressable, ScrollView, Button } from "react-native";

// export default function Index1() {
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       <Text style={styles.text}>kaisi ho cister.</Text>
//       <Image
//         source={{ uri: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww" }}
//         style={{ width: 200, height: 200, borderRadius: 12 }}
//       />
//       <Button onPress={() => alert("button component")} title="click hua">
        
//       </Button>
//       <TextInput placeholder="enter dog name" style={{width:200,height:50,padding:4,borderWidth:1,borderColor:"black",borderRadius:12,}}/>
//       <Pressable onPress={() => alert("click hua")}>
//         <Text style={{fontSize:16,color:"white",fontWeight:"600",backgroundColor:"black",padding:12,borderRadius:12,width:200,textAlign:"center",}}>
//           Submit 
//         </Text>
//       </Pressable>
//       <Image
//         source={{ uri: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww" }}
//         style={{ width: 200, height: 200, borderRadius: 12 }}
//       />
//       <TextInput placeholder="enter dog name" style={{width:200,height:50,padding:4,borderWidth:1,borderColor:"black",borderRadius:12,}}/>
//       <Pressable onPress={() => alert("click hua")}>
//         <Text style={{fontSize:16,color:"white",fontWeight:"600",backgroundColor:"black",padding:12,borderRadius:12,width:200,textAlign:"center",}}>
//           Submit 
//         </Text>
//       </Pressable>
//       <Image
//         source={{ uri: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww" }}
//         style={{ width: 200, height: 200, borderRadius: 12,resizeMode:"contain"}}
//       />
//       <TextInput placeholder="enter dog name" style={{width:200,height:50,padding:4,borderWidth:1,borderColor:"black",borderRadius:12,}}/>
//       <Pressable onPress={() => alert("click hua")}>
//         <Text style={{fontSize:16,color:"white",fontWeight:"600",backgroundColor:"black",padding:12,borderRadius:12,width:200,textAlign:"center",}}>
//           Submit 
//         </Text>
//       </Pressable>
//       <Image
//         source={{ uri: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww" }}
//         style={{ width: 200, height: 200, borderRadius: 12, resizeMode: "cover" }}
//       />
//       <TextInput placeholder="enter dog name" style={{width:200,height:50,padding:4,borderWidth:1,borderColor:"black",borderRadius:12,}}/>
//       <Pressable onPress={() => alert("click hua")}>
//         <Text style={{fontSize:16,color:"white",fontWeight:"600",backgroundColor:"black",padding:12,borderRadius:12,width:200,textAlign:"center",}}>
//           Submit 
//         </Text>
//       </Pressable>
//       <Image
//         source={{ uri: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww" }}
//         style={{ width: 200, height: 200, borderRadius: 12 , resizeMode:"stretch"}}
//       />
//       <TextInput placeholder="enter dog name" style={{width:200,height:50,padding:4,borderWidth:1,borderColor:"black",borderRadius:12,}}/>
//       <Pressable onPress={() => alert("click hua")}>
//         <Text style={{fontSize:16,color:"white",fontWeight:"600",backgroundColor:"black",padding:12,borderRadius:12,width:200,textAlign:"center",}}>
//           Submit 
//         </Text>
//       </Pressable>
//       <View style={styles.card}  >
//         <Text style={styles.text}> learning mobile dev.</Text>
//       </View>
      
//     </View>

//     </ScrollView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    gap: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#e79a15ff",
    padding: 16,
    borderRadius: 10,
    margin:8,

    // android shadow
    elevation: 10,

    // ios shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,


    // using flex to center the card
    alignItems: "center", //horizontal alignment
    justifyContent: "center", //vertical alignment
  
  },
  text:{
    fontSize: 24,
    lineHeight: 20,
    textAlign: "center",
  }
});

// flatlist

// const data= [
//   {
//     id: 1,
//     name:"amrit"
//   },
//   {
//     id: 2,
//     name:"singh"
//   },
//   {
//     id: 3,
//     name:"rajput"
//   },
// ]



// export default function Index2() {
//   return (
//     <View >
//       <FlatList
//       data={data}
//       keyExtractor={(item)=>item.id.toString()}
//       renderItem={({item})=>(
//         <View style={styles.card} >
//           <Text style={styles.text}> {item.name}</Text>
//         </View>
//       )}
//       // horizontal={true}
//         ListHeaderComponent={ () => <Text style={{fontSize:20,fontWeight:"bold"}}>Header</Text>}
//         ListFooterComponent={ () => <Text   style={{fontSize:20,fontWeight:"bold"}}>Footer</Text>}
//         ItemSeparatorComponent={ () => <View style={{height:10,backgroundColor:"#ccc"}}/>}
//       />
//     </View>

//   );
// }

const vegSection = [
  {title: "leafy Greens",
  data: [
    { id:1,name: "Spinach", calories: 237, fat: 6, carbs: 55, protein: 4.3, sodium: 36 },
    { id:2,name: "Kale", calories: 270, fat: 4, carbs: 62, protein: 2.8, sodium: 33 },
  ]},
  {title: "Vegetables",
  data: [
    { id:3,name: "Broccoli", calories: 300, fat: 3, carbs: 71, protein: 6.5, sodium: 45 },
    { id:4,name: "Brussel Sprouts", calories: 250, fat: 2, carbs: 83, protein: 4.5, sodium: 40 },
  ]},
  {title: "Fruits",
    data: [
      { id:5,name: "Apple", calories: 380, fat: 4, carbs: 62, protein: 9, sodium: 39 },
      { id:6,name: "Banana", calories: 270, fat: 2, carbs: 83, protein: 4.5, sodium: 40 },
    ]}
]

export default function Index3() {
  return (
    <SectionList  
      sections={vegSection}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(
        <View style={styles.card} > 
          <Text style={styles.text}> {item.name}</Text>
    </View>
      )}
renderSectionHeader={({section})=>(
  <Text style={{fontSize:20,fontWeight:"bold"}}>{section.title}</Text>
  )}
      ItemSeparatorComponent={ () => <View style={{height:10,backgroundColor:"#ccc"}}/>}
      />
);
}