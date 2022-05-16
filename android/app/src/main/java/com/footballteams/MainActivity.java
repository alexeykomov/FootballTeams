package com.footballteams;

import android.app.Activity;

import androidx.annotation.Nullable;

import com.reactnativenavigation.NavigationActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends NavigationActivity {



  public static class MainActivityDelegate extends ReactActivityDelegate {


      public MainActivityDelegate(Activity activity, @Nullable String mainComponentName) {
          super(activity, mainComponentName);
      }

      @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }
  }
}
