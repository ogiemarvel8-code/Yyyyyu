import React, { useState } from 'react';
import { X, Save, RotateCcw, Building2, Phone, MessageCircle, MapPin, Tag } from 'lucide-react';
import { CompanyConfig, DEFAULT_COMPANY_CONFIG } from '../config/company';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CompanyConfig;
  onSave: (updated: CompanyConfig) => void;
  onReset: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<CompanyConfig>(config);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(DEFAULT_COMPANY_CONFIG);
    onReset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#0C2B1C]">
              Edit Business Details & Prices
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Updates your live phone numbers, WhatsApp, yard address, and roofing prices.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close settings"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Company Name</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              required
            />
          </div>

          {/* Contact Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Phone (Display)</span>
              </label>
              <input
                type="text"
                value={formData.phoneDisplay}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phoneDisplay: e.target.value,
                    phoneDial: e.target.value.replace(/[^0-9+]/g, ''),
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                placeholder="0803 928 1734"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>WhatsApp Number</span>
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    whatsappNumber: e.target.value.replace(/[^0-9]/g, ''),
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                placeholder="2348039281734"
                required
              />
            </div>
          </div>

          {/* Yard Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Abuja Yard Address</span>
            </label>
            <input
              type="text"
              value={formData.yardAddress}
              onChange={(e) => setFormData({ ...formData, yardAddress: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              required
            />
          </div>

          {/* Google Maps Link */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Google Maps URL
            </label>
            <input
              type="url"
              value={formData.googleMapsUrl}
              onChange={(e) => setFormData({ ...formData, googleMapsUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              required
            />
          </div>

          {/* Prices Section */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Roofing Rates (₦ per square meter)</span>
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div>
                <span className="block text-[11px] text-slate-500 mb-1">Stone Coated</span>
                <input
                  type="number"
                  value={formData.stoneCoatedPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, stoneCoatedPrice: Number(e.target.value) || 0 })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  step="100"
                />
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 mb-1">Aluminium 0.55</span>
                <input
                  type="number"
                  value={formData.aluminiumPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, aluminiumPrice: Number(e.target.value) || 0 })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  step="100"
                />
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 mb-1">Step Tiles</span>
                <input
                  type="number"
                  value={formData.stepTilesPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, stepTilesPrice: Number(e.target.value) || 0 })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  step="100"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#0C2B1C] hover:bg-[#15462D] text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
              >
                <Save className="w-3.5 h-3.5 text-[#4ADE80]" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
