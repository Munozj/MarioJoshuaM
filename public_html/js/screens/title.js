game.TitleScreen = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addchild(new me.Sprite(0, 0 me.loader.getImage('title-screen')), 3);
        me.input.bindkey(me.input.KEY.ENTER, "start");
        
        
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
            if(action === "start"){
                me.state.change(me.state.PLAY);
            }
        });
   },
    /**	
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        ; // TODO
    }
});
