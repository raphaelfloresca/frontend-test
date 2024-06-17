import { TabBarIcon } from '../navigation/TabBarIcon'
import NuliIcon from './NuliIcon';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Text, View } from 'react-native'

/**
 * Return the popup settings menu
 */
export default function PopupMenu() {
  return (
    <Menu>
      <MenuTrigger>
        <TabBarIcon name="ellipsis-horizontal" color="white" />
      </MenuTrigger>
      <MenuOptions customStyles={{
        optionsContainer: {
          borderRadius: 10,
          width: 250,
          paddingVertical: 10,
          backgroundColor: "#FFFFFF"
        },
      }}>
        <Text style={{ textAlign: 'center', paddingBottom: 10, fontSize: 11 }}>Options</Text>
        <MenuOption onSelect={() => alert(`View Exercise Info`)} >
          <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 13 }}>View Exercise Info</Text>
            <NuliIcon name="menu-info" />
          </View>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Show Exercise History`)} >
          <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 13 }}>Show Exercise History</Text>
            <NuliIcon name="history" />
          </View>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Prefill Weights & Reps`)} >
          <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 13 }}>Prefill Weights & Reps</Text>
            <NuliIcon name="prefill" />
          </View>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Swap Exercise`)} >
          <View style={{ paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 13 }}>Swap Exercise</Text>
            <NuliIcon name="swap" />
          </View>
        </MenuOption>
      </MenuOptions>
    </Menu>
  )
}

