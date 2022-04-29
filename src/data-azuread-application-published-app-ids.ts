// https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadApplicationPublishedAppIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids#timeouts DataAzureadApplicationPublishedAppIds#timeouts}
  */
  readonly timeouts?: DataAzureadApplicationPublishedAppIdsTimeouts;
}
export interface DataAzureadApplicationPublishedAppIdsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids#read DataAzureadApplicationPublishedAppIds#read}
  */
  readonly read?: string;
}

export function dataAzureadApplicationPublishedAppIdsTimeoutsToTerraform(struct?: DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference | DataAzureadApplicationPublishedAppIdsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzureadApplicationPublishedAppIdsTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadApplicationPublishedAppIdsTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids azuread_application_published_app_ids}
*/
export class DataAzureadApplicationPublishedAppIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_application_published_app_ids";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/application_published_app_ids azuread_application_published_app_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadApplicationPublishedAppIdsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadApplicationPublishedAppIdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_application_published_app_ids',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.22.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // result - computed: true, optional: false, required: false
  public result(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'result').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadApplicationPublishedAppIdsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadApplicationPublishedAppIdsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      timeouts: dataAzureadApplicationPublishedAppIdsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
