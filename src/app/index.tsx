import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Alert,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const showAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert Button pressed");
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.phone}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <Ionicons name="chevron-back" size={27} color="#000" />

            <View style={styles.usernameRow}>
              <Text style={styles.username}>jennaortega</Text>

              <Ionicons
                name="checkmark-circle"
                size={18}
                color="#0095F6"
              />
            </View>

            <View style={styles.headerRight}>
              <Pressable onPress={showAlert}>
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color="#000"
                />
              </Pressable>

              <Ionicons
                name="ellipsis-horizontal"
                size={25}
                color="#000"
              />
            </View>
          </View>

          {/* PROFILE */}
          <View style={styles.profileRow}>
            <View style={styles.profileOuter}>
              <Image
                source={require("../../assets/images/jenna-profile.jpg")}
                style={styles.profileImage}
              />
            </View>

            <View style={styles.stats}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>246</Text>
                <Text style={styles.statText}>posts</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>38M</Text>
                <Text style={styles.statText}>followers</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statNumber}>587</Text>
                <Text style={styles.statText}>following</Text>
              </View>
            </View>
          </View>

          {/* BIO */}
          <View style={styles.bio}>
            <Text style={styles.name}>Jenna Ortega</Text>
            <Text style={styles.category}>Actor</Text>
            <Text style={styles.bioText}>Wednesday 🖤</Text>
          </View>

          {/* BUTTONS */}
          <View style={styles.buttonRow}>
            <Pressable style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </Pressable>

            <Pressable style={styles.messageButton}>
              <Text style={styles.messageText}>Message</Text>
            </Pressable>

            <Pressable style={styles.addPersonButton}>
              <Ionicons
                name="person-add-outline"
                size={17}
                color="#000"
              />
            </Pressable>
          </View>

          {/* HIGHLIGHTS */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.highlights}
          >
            <View style={styles.highlight}>
              <View style={styles.highlightCircle}>
                <MaterialCommunityIcons
                  name="movie-open-outline"
                  size={25}
                  color="#222"
                />
              </View>
              <Text style={styles.highlightText}>Movies</Text>
            </View>

            <View style={styles.highlight}>
              <View style={styles.highlightCircle}>
                <Ionicons
                  name="moon-outline"
                  size={25}
                  color="#222"
                />
              </View>
              <Text style={styles.highlightText}>Wednesday</Text>
            </View>

            <View style={styles.highlight}>
              <View style={styles.highlightCircle}>
                <Ionicons
                  name="camera-outline"
                  size={25}
                  color="#222"
                />
              </View>
              <Text style={styles.highlightText}>Photos</Text>
            </View>

            <View style={styles.highlight}>
              <View style={styles.highlightCircle}>
                <Ionicons
                  name="sparkles-outline"
                  size={25}
                  color="#222"
                />
              </View>
              <Text style={styles.highlightText}>Life</Text>
            </View>
          </ScrollView>

          {/* TABS */}
          <View style={styles.tabs}>
            <View style={styles.activeTab}>
              <Ionicons
                name="grid-outline"
                size={25}
                color="#000"
              />
            </View>

            <View style={styles.tab}>
              <MaterialCommunityIcons
                name="movie-play-outline"
                size={27}
                color="#777"
              />
            </View>

            <View style={styles.tab}>
              <Ionicons
                name="person-outline"
                size={25}
                color="#777"
              />
            </View>
          </View>

          {/* POSTS */}
          <View style={styles.grid}>
            <View style={styles.postBox}>
              <Image
                source={require("../../assets/images/post1.jpg")}
                style={styles.postImage}
              />
            </View>

            <View style={styles.postBox}>
              <Image
                source={require("../../assets/images/post2.jpg")}
                style={styles.postImage}
              />
            </View>

            <View style={styles.postBox}>
              <Image
                source={require("../../assets/images/post3.jpg")}
                style={styles.postImage}
              />
            </View>

            <View style={styles.postBox}>
              <Image
                source={require("../../assets/images/post4.jpg")}
                style={styles.postImage}
              />
            </View>

            <View style={styles.postBox}>
              <Image
                source={require("../../assets/images/post5.jpg")}
                style={styles.postImage}
              />
            </View>

            <View style={styles.postBox}>
              <Image
                source={require("../../assets/images/post6.jpg")}
                style={styles.postImage}
              />
            </View>
          </View>
        </ScrollView>

        {/* BOTTOM NAVIGATION */}
        <View style={styles.bottomNav}>
          <Ionicons
            name="home"
            size={27}
            color="#000"
          />

          <Ionicons
            name="search-outline"
            size={28}
            color="#000"
          />

          <Ionicons
            name="add-circle-outline"
            size={29}
            color="#000"
          />

          <MaterialCommunityIcons
            name="movie-play-outline"
            size={29}
            color="#000"
          />

          <Image
            source={require("../../assets/images/jenna-profile.jpg")}
            style={styles.bottomProfile}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },

  phone: {
    flex: 1,
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#fff",
  },

  scrollContent: {
    paddingBottom: 75,
  },

  header: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    borderBottomWidth: 0.3,
    borderBottomColor: "#efefef",
  },

  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  username: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  profileOuter: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 3,
  },

  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 45,
    resizeMode: "cover",
  },

  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 12,
  },

  statBox: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },

  statText: {
    fontSize: 13,
    color: "#000",
    marginTop: 2,
  },

  bio: {
    paddingHorizontal: 16,
    marginTop: 12,
  },

  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },

  category: {
    marginTop: 2,
    fontSize: 13,
    color: "#737373",
  },

  bioText: {
    marginTop: 3,
    fontSize: 14,
    color: "#000",
  },

  buttonRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 14,
    gap: 6,
  },

  followButton: {
    flex: 1,
    height: 34,
    backgroundColor: "#0095F6",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  followText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  messageButton: {
    flex: 1,
    height: 34,
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  messageText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },

  addPersonButton: {
    width: 36,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
  },

  highlights: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 13,
  },

  highlight: {
    alignItems: "center",
    marginRight: 17,
    width: 70,
  },

  highlightCircle: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  highlightText: {
    fontSize: 11,
    marginTop: 5,
    color: "#000",
  },

  tabs: {
    height: 48,
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
  },

  activeTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1.5,
    borderBottomColor: "#000",
  },

  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  postBox: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
  },

  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 62,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  bottomProfile: {
    width: 28,
    height: 28,
    borderRadius: 14,
    resizeMode: "cover",
  },
});