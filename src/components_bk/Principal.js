import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';
import Forum from './Forum';

export default class Principal extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'conversas', title: 'Conversas' },
            { key: 'contatos', title: 'Contatos' },
            { key: 'forum', title: 'Forum' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    conversas: Conversas,
                    contatos: Contatos,
                    forum: Forum,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height  }}
                renderTabBar={props =>
                    <TabBarMenu
                        {...props}
                        indicatorStyle={{ backgroundColor: 'pink' }}
                    />
                }
            />
        );
    }
}